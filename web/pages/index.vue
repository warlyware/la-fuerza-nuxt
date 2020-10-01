<template>
  <div class="mx-auto justify-between pt-4 w-full md:px-4">
    <div class="w-full flex flex-wrap">
      <div class="w-full lg:w-1/2 my-1/2">
        <youtube player-width="100%" player-height="100%"
        :player-vars="playerVars"
        class="video-responsive flex-grow"
        :video-id="getYoutubeId(video1Url)"
        @ready="topVideoReady"
        @ended="topVideoEnded"/>
      </div>
      <div class="w-full lg:w-1/2 bg-pink text-white flex justify-center items-center leading-tight p-8">
        <BlockContent :blocks="this[`${locale}Block1Text`]" />
      </div>
    </div>

    <div class="font-bold italic">
      <h1 class="text-aqua font-bold italic uppercase w-full text-center pt-8 mb-4">
        {{block2Title[locale]}}
      </h1>
      <div class="flex w-full flex-wrap items-center justify-around pb-12">
        <CustomButton :button="block2Button1"
        class="w-full md:w-auto bg-pink text-white text-shadow-aqua text-2xl rounded px-2 mx-4 mb-2" />
        <CustomButton :button="block2Button2"
        class="w-full md:w-auto bg-aqua text-white text-shadow-pink text-2xl rounded px-2 mx-4 mb-2" />
        <CustomButton :button="block2Button3"
        class="w-full md:w-auto bg-pink text-white text-shadow-aqua text-2xl rounded px-2 mx-4 mb-2" />
        <CustomButton :button="block2Button4"
        class="w-full md:w-auto bg-aqua text-white text-shadow-pink text-2xl rounded px-2 mx-4 mb-2" />
        <CustomButton :button="block2Button5"
        class="w-full md:w-auto bg-pink text-white text-shadow-aqua text-2xl rounded px-2 mx-4 mb-2" />
      </div>
    </div>

    <div class="w-full flex flex-wrap pb-8">
      <div class="w-full order-1 md:w-1/3 bg-blue text-white flex flex-col justify-center items-center leading-tight p-8">
        <div class="text-4xl text-aqua pb-4 text-center">
          <BlockContent :blocks="this[`${locale}Block3Text`]" />
        </div>
        <div class="flex justify-center w-full mb-2">
          <CustomButton :button="block3Button"
          class="bg-aqua text-white text-shadow-pink text-2xl rounded px-2 mx-4 mb-2p mt-4" />
        </div>
      </div>
      <div class="w-full order-first md:order-last md:w-2/3 my-1/2">
        <youtube player-width="100%" player-height="100%"
        class="video-responsive flex-grow"
        :video-id="getYoutubeId(video2Url)" />
      </div>
    </div>

    <div class="w-full flex flex-wrap">
      <div class="w-full md:w-1/2 md:pr-2 mb-2">
        <youtube player-width="100%" player-height="100%"
        class="video-responsive flex-grow"
        :video-id="getYoutubeId(video3Url)" />
      </div>
      <div class="w-full md:w-1/2 md:pl-2 mb-2">
        <youtube player-width="100%" player-height="100%"
        class="video-responsive flex-grow"
        :video-id="getYoutubeId(video4Url)" />
      </div>
    </div>
  </div>
</template>

<script>
import getYoutubeId from 'get-youtube-id'
import groq from 'groq'
import BlockContent from 'sanity-blocks-vue-component'
import sanityClient from '~/sanityClient'
import CustomButton from '~/components/blocks/CustomButton'

const query = groq`
  *[_id == "page-home"][0] {
    ...
  }
`

export default {
  components: {
    BlockContent,
    CustomButton
  },
  data() {
    return {
      replays: 0,
      playerVars: {
        loop: 1,
        muted: 1,
        autoplay: 1,
        controls: 1,
        disablekb: 0,
        iv_load_policy: 3,
        modestbranding: 1
      }
    }
  },
  computed: {
    locale() { return this.$i18n.locale }
  },
  async asyncData() {
    return await sanityClient.fetch(query)
  },
  methods: {
    getYoutubeId,
    topVideoReady({ target }) {
      this.$nextTick(() => {
        target.mute()
      })
    },
    topVideoEnded({ target }) {
      if (this.replays <= 20) {
        this.$nextTick(() => {
          this.replays += 1
          target.seekTo(0)
          target.playVideo()
        })
      }
    }
  },
}
</script>
