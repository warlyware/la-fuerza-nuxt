<template>
  <div class="pt-8 mx-auto md:pt-32 mb-8 content w-full">
    <div class="flex w-full justify-center items-center h-64 bg-blue mb-8">
      <SanityImage :image="logo"
      class="h-48 opacity-50"
      :class="wrapperClass" />
    </div>

    <!-- <ShareMenu class="w-full flex justify-center py-8" :share-menu="shareMenu" /> -->

    <div class="flex flex-wrap max-w-6xl m-auto px-8 lg:px-0 justify-center mb-4">
      <div class="w-full md:w-1/2">
        <div class="md:pr-2 text-blue mb-4">
          <BlockContent v-if="this[`${locale}Description`]"
          :blocks="this[`${locale}Description`]" />
        </div>
      </div>
      <div v-if="image1"
      class="w-full md:w-1/2 md:pl-2 max-w-xl m-auto flex flex-wrap">
        <SanityImage
        class="w-full bg-blue flex-shrink-0 justify-center items-center"
        :image="image1"
        fit="crop" />
      </div>
    </div>

    <div class="flex flex-wrap max-w-6xl m-auto px-8 lg:px-0 justify-center mb-4">
      <div v-if="image2"
      class="w-full md:w-1/2 md:pr-2 max-w-xl m-auto flex flex-wrap">
        <SanityImage class="w-full bg-blue flex-shrink-0 justify-center items-center"
        :image="image2"
        fit="crop" />
      </div>
      <div class="w-full md:w-1/2 text-blue">
        <div class="flex flex-col md:ml-2 text-4xl uppercase text-center border border-blue rounded flex-grow h-full">
          <div class="border-b border-blue italic">
            {{ downloadResourcesText }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '~/sanityClient'
const builder = imageUrlBuilder(sanityClient)
// import ShareMenu from '~/components/ShareMenu'
import SanityImage from '~/components/SanityImage'
// import SanityImageResponsive from '~/components/SanityImageResponsive'
import BlockContent from 'sanity-blocks-vue-component'
import groq from 'groq'

const query = groq`
  *[_type == "partner" && slug.current == $slug][0] {..., "id": _id}
`

export default {
  components: {
    BlockContent,
    SanityImage,
    // SanityImageResponsive
    // ShareMenu
  },
  computed: {
    locale() { return this.$i18n.locale },
    image1Src() { return this.getImageUrl(this.image1) },
    image2Src() { return this.getImageUrl(this.image2) },
    downloadResourcesText() { return this.locale === 'en' ? 'Download Resources' : 'Descargar Recursos' }
  },
  async asyncData({ params }) {
    const data =  await sanityClient.fetch(query, params)
    console.log({ data })
    return data
  },
  methods: {
    getImageUrl(image) {
      return builder.image(image)
    }
  }
}
</script>

<style>
  .h-image {
    height: 20rem;
  }
</style>
