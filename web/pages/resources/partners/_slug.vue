<template>
  <div class="pt-8 mx-auto md:pt-32 mb-8 content w-full">
    <div class="flex w-full justify-center items-center h-64 bg-blue mb-8 px-4">
      <SanityImage :image="logo"
      class="h-28 md:h-48 opacity-50" />
    </div>

    <!-- <ShareMenu class="w-full flex justify-center py-8" :share-menu="shareMenu" /> -->

    <div class="flex flex-wrap max-w-6xl m-auto px-8 justify-center mb-4">
      <div class="w-full lg:w-1/2 px-4">
        <div class="text-blue mb-4">
          <BlockContent v-if="this[`${locale}Description`]"
          :blocks="this[`${locale}Description`]" />
        </div>
      </div>
      <div v-if="image1" class="flex items-center justify-center w-full lg:w-1/2 my-1/2">
        <SanityImageResponsive alignment="contain"
        class="video-responsive flex-grow"
        :image="image1"
        fit="min"/>
      </div>
      <!-- <div v-if="image1"
      class="w-full md:w-1/2 md:pl-2 max-w-xl m-auto  flex-wrap">
      </div> -->
    </div>

    <div class="flex flex-wrap max-w-6xl m-auto px-8 justify-center mb-4">
      <div v-if="image1" class="flex items-center justify-center w-full lg:w-1/2 my-1/2">
        <SanityImageResponsive alignment="contain"
        class="video-responsive flex-grow"
        :image="image1"
        fit="min"/>
      </div>
      <div class="w-full lg:w-1/2 text-blue">
        <div class="flex flex-col lg:ml-4 uppercase border border-blue rounded flex-grow h-full">
          <div class="border-b border-blue text-center italic text-4xl">
            {{ downloadResourcesText }}
          </div>
          <ul class="text-xl my-2 px-8 text-center">
            <li v-for="download in resourceDownloads" :key="download._id"
            class="my-1">
              <a :href="processLink(download.resourceLink)" target="_blank">
                {{ download.name[locale] }}
              </a>
            </li>
          </ul>
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
import SanityImageResponsive from '~/components/SanityImageResponsive'
import SanityImage from '~/components/SanityImage'
import BlockContent from 'sanity-blocks-vue-component'
import groq from 'groq'

const query = groq`
  *[_type == "partner" && slug.current == $slug][0] {..., "id": _id}
`

export default {
  components: {
    BlockContent,
    SanityImage,
    SanityImageResponsive
    // ShareMenu
  },
  computed: {
    locale() { return this.$i18n.locale },
    image1Src() { return this.getImageUrl(this.image1) },
    image2Src() { return this.getImageUrl(this.image2) },
    downloadResourcesText() { return this.locale === 'en' ? 'Download Resources' : 'Descargar Recursos' }
  },
  async asyncData({ params }) {
    return await sanityClient.fetch(query, params)
  },
  methods: {
    getImageUrl(image) {
      return builder.image(image)
    },
    processLink(link) {
      if (
        link.includes('docs.google.com/document/d') &&
        link.includes('edit?usp=sharing')
      ) {
        return link.replace('edit?usp=sharing', 'export?format=pdf')
      }
      return link
    }
  }
}
</script>

<style>
  .h-image {
    /* height: 20rem; */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .video-responsive{
  margin-top: -2px;
  margin-bottom: -2px;
  position: relative;
  padding-bottom: calc(var(--aspect-ratio, .5625) * 100%);
  height: 0;
}
.video-responsive div {
  position: absolute;
  margin:auto;
  top: 0;
  bottom:0;
  right:0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
}
</style>
