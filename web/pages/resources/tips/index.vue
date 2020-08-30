/* eslint-disable vue/no-parsing-error */
<template>
  <div class="pt-8 w-full">
    <h1 class="font-MissionGothicBlack text-6xl uppercase text-center">
      {{title[locale]}}
    </h1>
    <!-- Carousel -->
    <!-- <div class="w-full border border-blue flex items-center mb-16">
      <div class="w-1/4">
        <span class="text-6xl px-4 cursor-pointer" @click="prevImage">
          &lt;
        </span>
      </div>
      <div class="w-1/2 h-image-carousel relative">
        <img class="h-full mx-auto" :src="images[currentImageIndex].src" alt="">
      </div>
      <div class="flex justify-end w-1/4 cursor-pointer">
        <span class="text-6xl px-4" @click="nextImage">
          >
        </span>
      </div>
    </div> -->

    <LightBox ref="lightbox"
    :media="formattedTips" :show-caption="true"
    :show-light-box="false" />
    <div class="flex flex-wrap justify-start w-full max-w-5xl m-auto px-4 mb-8">
      <div v-for="(tip, i) in formattedTips" :key="tip.caption"
      class="pb-1/6 h-0 w-1/6 mx-2 flex-shrink-0">
        <div :style="`background-image: url(${tip.thumb})`"
        class="cursor-pointer bg-cover bg-center h-40"
        @click="showImage(i)" />
      </div>
    </div>

    <div v-if="bannerText && bannerText.length"
    class="py-8 flex justify-center w-full bg-blue text-white text-4xl">
      <BlockContent :blocks="bannerText" />
    </div>
  </div>
</template>

<script>
import BlockContent from 'sanity-blocks-vue-component'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '~/sanityClient'
const builder = imageUrlBuilder(sanityClient)
import LightBox from 'vue-image-lightbox'

const query = groq`
  *[_id == "page-tips"][0] {
    enBannerText[] {
      ...,
      children[] {
        ...
      }
    },
    esBannerText[] {
      ...,
      children[] {
        ...
      }
    },
    tips[] {
      ...
    },
    ...
  }
`

export default {
  components: { BlockContent, LightBox },
  data() {
    return {
      currentImageIndex: 0
    }
  },
  computed: {
    locale() { return this.$i18n.locale },
    bannerText() { return this.locale === 'en' ? this.enBannerText : this.esBannerText },
    formattedTips() {
      return this.tips.map(({ image, caption }) => {
        return {
          src: builder.image(image).url(),
          thumb: builder.image(image).width(200).url(),
          caption: caption ? caption[this.locale] : ''
        }
      })
    }
  },
  async asyncData() {
    return await sanityClient.fetch(query)
  },
  mounted() { console.log(this) },
  methods: {
    showImage(i) {
      this.$refs.lightbox.showImage(i)
      this.currentImageIndex = i
    },
    nextImage() {
      this.currentImageIndex === this.images.length - 1
        ? this.currentImageIndex = 0
        : this.currentImageIndex += 1
    },
    prevImage() {
      this.currentImageIndex === 0
        ? this.currentImageIndex = this.images.length - 1
        : this.currentImageIndex -= 1
    }
  }
}
</script>

<style lang="scss" scoped>
  .h-image-carousel {
    height: 350px;
  }
  .pb-1\/6 {
    padding-bottom: 16.7%;
  }
</style>
