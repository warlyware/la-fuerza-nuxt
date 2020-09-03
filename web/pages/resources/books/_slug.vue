<template>
  <div class="pt-8 mx-auto md:pt-32 mb-8 content w-full">
    <div class="h-screen fixed flex items-center top-0 left-0 -mt-16 z-10 pointer-events-none">
      <!-- {{shareMenu}} -->
      <ShareMenu class="pointer-events-auto" :share-menu="shareMenu" />
    </div>
    <LightBox ref="lightbox" :show-thumbs="false"
    :media="lightboxImages" :show-light-box="false" />
    <h1 class="font-bold text-4xl text-center max-w-2xl m-auto leading-10 mb-4">
      {{title[locale]}}
    </h1>
    <div class="flex max-w-5xl m-auto px-8 lg:px-0 justify-center mb-4">
      <p class="p-6 text-center w-full text-sm">
        <BlockContent v-if="this[`${locale}Description`]" :blocks="this[`${locale}Description`]" />
        {{author}} / {{illustrator}} / {{publisher}}
      </p>
    </div>
    <div class="w-full max-w-5xl m-auto mb-4">
      <youtube player-width="100%" player-height="100%"
      class="video-responsive flex-grow"
      :video-id="getYoutubeId(videoUrl)"  />
    </div>
    <div class="w-full max-w-5xl m-auto flex flex-wrap mb-8">
      <div class="w-full md:w-1/2 flex justify-center md:justify-start h-64 mb-2 mb:mb-0 md:h-image cursor-pointer"
      @click="showImage(0)">
        <SanityImageResponsive
        class="w-full bg-blue flex justify-center items-center md:mr-2"
        :image="image1"
        :width="400"
        fit="crop" />
      </div>
      <div class="w-full md:w-1/2 flex justify-center md:justify-start h-64 md:h-image cursor-pointer"
      @click="showImage(1)">
        <SanityImageResponsive
        class="w-full bg-blue flex justify-center items-center md:ml-2"
        :image="image2"
        :width="400"
        fit="crop" />
      </div>
    </div>
    <div class="w-full max-w-3xl m-auto flex flex-wrap justify-center px-8 md:px-4 lg:px-0">
      <BlockContent v-if="this[`${locale}Excerpt`]" :blocks="this[`${locale}Excerpt`]" />
    </div>
  </div>
</template>

<script>
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '~/sanityClient'
const builder = imageUrlBuilder(sanityClient)
import LightBox from 'vue-image-lightbox'
import ShareMenu from '~/components/ShareMenu'
import SanityImageResponsive from '~/components/SanityImageResponsive'
import getYoutubeId from 'get-youtube-id'
import BlockContent from 'sanity-blocks-vue-component'
import groq from 'groq'

const query = groq`
  *[_type == "book" && slug.current == $slug][0] {..., "id": _id}
`

export default {
  components: {
    BlockContent,
    LightBox,
    SanityImageResponsive,
    ShareMenu
  },
  computed: {
    locale() { return this.$i18n.locale },
    image1Src() { return this.getImageUrl(this.image1) },
    image2Src() { return this.getImageUrl(this.image2) },
    lightboxImages() { return [
      { src: this.image1Src },
      { src: this.image2Src },
    ]}
  },
  async asyncData({ params }) {
    return await sanityClient.fetch(query, params)
  },
  methods: {
    getImageUrl(image) {
      return builder.image(image)
    },
    getYoutubeId,
    showImage(i) {
      this.$refs.lightbox.showImage(i)
    }
  }
}
</script>

<style>
  .h-image {
    height: 20rem;
  }
</style>
