<template>
  <div class="pt-8 mx-auto md:pt-32 mb-8 content w-full">
    <div class="h-screen fixed flex items-center top-0 left-0 -mt-16 z-10 pointer-events-none">
      <ShareMenu class="pointer-events-auto" :share-menu="shareMenu" />
    </div>
    <LightBox ref="lightbox" :show-thumbs="false"
    :media="lightboxImages" :show-light-box="false" />
    <h1 class="font-bold text-4xl text-center max-w-2xl m-auto leading-10 mb-4">
      {{title[locale]}}
    </h1>
    <div class="flex max-w-5xl m-auto px-8 lg:px-0 justify-center mb-4">
      <p class="p-6 text-center w-full">
        <BlockContent v-if="this[`${locale}Description`]" :blocks="this[`${locale}Description`]" />
        {{author}} / {{illustrator}} / {{publisher}}
      </p>
    </div>
    <div class="w-full max-w-5xl m-auto mb-8">
      <youtube player-width="100%" player-height="100%"
      class="video-responsive flex-grow"
      :video-id="getYoutubeId(videoUrl)"  />
    </div>
    <div class="w-full max-w-xl m-auto flex flex-wrap mb-8 cursor-pointer"
    @click="showImage(0)">
      <SanityImage
      class="w-full bg-blue flex-shrink-0 justify-center items-center"
      :image="image1"
      :width="400"
      fit="crop" />
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
import SanityImage from '~/components/SanityImage'
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
    SanityImage,
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
