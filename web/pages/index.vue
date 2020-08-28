<template>
  <div class="mx-auto justify-between pt-4 w-full">
    <div class="w-full flex flex-wrap">
      <div class="w-full md:w-2/3 my-1/2">
        <youtube player-width="100%" player-height="100%"
        :player-vars="playerVars"
        class="video-responsive flex-grow"
        :video-id="getYoutubeId(video1Url)"
        @ready="topVideoReady" />
      </div>
      <div class="w-full md:w-1/3 bg-pink text-white flex justify-center items-center leading-tight p-8">
        <span class="uppercase text-4xl font-MissionGothicBlackItalic">
          {{block1Text[locale]}}
        </span>
      </div>
    </div>
    <div class="font-MissionGothicBlackItalic">
      <h1 class="text-aqua text-3xl uppercase w-full text-center pt-8">
        {{block2Title[locale]}}
      </h1>
      <div class="flex w-full flex-wrap items-center justify-around pb-12">
        <nuxt-link to="/videos"
        class="w-full md:w-auto bg-pink text-white text-shadow-aqua text-2xl rounded px-2 uppercase mx-4 mb-2">
          {{block2Button1Text[locale]}}
        </nuxt-link>
        <nuxt-link to="/workshops"
        class="w-full md:w-auto bg-aqua text-white text-shadow-pink text-2xl rounded px-2 uppercase mx-4 mb-2">
          {{block2Button2Text[locale]}}
        </nuxt-link>
        <nuxt-link to="/resources/books"
        class="w-full md:w-auto bg-pink text-white text-shadow-aqua text-2xl rounded px-2 uppercase mx-4 mb-2">
          {{block2Button3Text[locale]}}
        </nuxt-link>
        <nuxt-link to="/resources/tips"
        class="w-full md:w-auto bg-aqua text-white text-shadow-pink text-2xl rounded px-2 uppercase mx-4 mb-2">
          {{block2Button4Text[locale]}}
        </nuxt-link>
      </div>
    </div>

    <div class="w-full flex flex-wrap pb-8">
      <div class="w-full order-1 md:w-1/3 bg-blue text-white flex flex-col justify-center items-center leading-tight p-8 italic">
        <div class="uppercase text-4xl font-MissionGothicBlackItalic text-aqua pb-4">
          {{block3Text[locale]}}
        </div>
        <button class="w-full md:w-auto bg-aqua text-white text-shadow-pink text-2xl rounded px-2 uppercase mx-4 mb-2p mt-4">
          {{block3ButtonText[locale]}}
        </button>
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
import sanityClient from '~/sanityClient'

const query = groq`
  *[_id == "page-home"][0] {
    ...
  }
`

export default {
  components: {
    // VideoThumbnail
    // SanityImage
  },
  data() {
    return {
      playerVars: {
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
      target.mute()
    }
  },
}
</script>
