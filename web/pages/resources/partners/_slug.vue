<template>
  <div class="pt-8 mx-auto md:pt-32 mb-8 content w-full">
    <div class="flex w-full justify-center items-center h-64 bg-blue mb-8 px-4">
      <SanityImage :image="logo"
      class="h-28 md:h-48 opacity-50" />
    </div>

    <!-- <ShareMenu class="w-full flex justify-center py-8" :share-menu="shareMenu" /> -->

    <div class="flex flex-wrap max-w-5xl m-auto justify-center mb-4">
      <div class="w-full px-4">
        <div class="text-blue mb-4">
          <BlockContent v-if="this[`${locale}Description`]"
          :blocks="this[`${locale}Description`]" />
        </div>
      </div>
    </div>

    <div v-if="resourceDownloads.length"
    class="flex flex-wrap max-w-6xl m-auto justify-center mb-8">
      <div class="w-full text-blue">
        <div class="lg:ml-4 border border-pink rounded flex-grow h-full">
          <div class="border-b uppercase border-pink text-center italic text-4xl text-blue leading-tight">
            {{ downloadResourcesText }}
          </div>
          <div class="text-xl my-2 px-2 text-center rounded flex flex-wrap">
            <div v-for="download in resourceDownloads" :key="download._id"
            class="p-4 w-full md:w-1/3 flex items-center">
              <a class="p-4 flex flex-col flex-grow h-full justify-center hover:shadow-lg border border-aqua rounded"
              :href="processLink(download.resourceLink)" target="_blank" download>
                <!-- <img v-if="download.image" :src="getImageUrl(download.image)" class="mb-2"> -->
                <SanityImage v-if="download.image"
                class="w-full bg-blue flex-shrink-0 justify-center items-center mb-2"
                alt="Resource image from partner"
                :image="download.image"
                fit="crop" />
                {{ download.name[locale] }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="image1"
    class="w-full max-w-xl m-auto flex flex-wrap">
      <SanityImage
      class="w-full bg-blue flex-shrink-0 justify-center items-center"
      alt="Image from partner"
      :image="image1"
      fit="crop" />
      <p v-if="image1Caption && image1Caption.en && image1Caption.en.length"
      class="w-full text-center text-xl mt-2">
        {{image1Caption[locale]}}
      </p>
    </div>
  </div>
</template>

<script>
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '~/sanityClient'
const builder = imageUrlBuilder(sanityClient)
// import ShareMenu from '~/components/ShareMenu'
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
    // ShareMenu
  },
  data() {
    return {
      resourceDownloads: []
    }
  },
  computed: {
    locale() { return this.$i18n.locale },
    image1Src() { return this.getImageUrl(this.image1) },
    image2Src() { return this.getImageUrl(this.image2) },
    downloadResourcesText() { return this.locale === 'en' ? 'SPANISH RESOURCES FROM OUR PARTNER' : 'RECURSOS EN ESPAÑOL DE NUESTRO COLABORADOR' }
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
