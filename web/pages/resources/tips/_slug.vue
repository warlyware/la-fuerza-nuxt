/* eslint-disable vue/no-parsing-error */
<template>
  <div class="pt-8 w-full">
    <h1 class="font-MissionGothicBlack text-6xl uppercase text-center mb-0">
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
    :media="formattedTips"
    :show-light-box="false" />

    <ul class="flex flex-wrap max-w-3xl m-auto">
      <li v-for="(tip, i) in formattedTips" :key="tip._id"
      class="flex w-full md:w-1/3 lg:w-1/4">
        <div class="list-content items-center">
          <div :style="`background-image: url(${tip.thumb})`"
          class="cursor-pointer bg-contain bg-no-repeat bg-center w-full h-128 md:h-48"
          @click="showImage(i)" />
        </div>
      </li>
    </ul>

    <div v-if="bannerText && bannerText.length"
    class="mt-8 py-8 -mb-8 flex justify-center w-full bg-blue text-white text-4xl">
      <BlockContent :blocks="bannerText" />
    </div>
  </div>
</template>

<script>
// import SanityImage from '~/components/SanityImage'
import BlockContent from 'sanity-blocks-vue-component'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '~/sanityClient'
const builder = imageUrlBuilder(sanityClient)
import LightBox from 'vue-image-lightbox'

const query1 = groq`
  *[_id == "page-resources"][0] {
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
    tips[]->{
      ...
    },
    ...
  }
`
const query2 = groq`
  *[_id == "page-tips"][0] {
    ...
  }
`

export default {
  components: { BlockContent, LightBox },
  data() {
    return {
      currentImageIndex: 0,
      windowWidth: 0
    }
  },
  computed: {
    paddingBottomClass() {
      return this.windowWidth >= 1024 ? 'pb-1/6' : 'pb-full'
    },
    locale() { return this.$i18n.locale },
    bannerText() { return this.locale === 'en' ? this.enBannerText : this.esBannerText },
    formattedTips() {
      return this.tips.map(({ image, caption }) => {
        return {
          image,
          src: builder.image(image).url(),
          thumb: builder.image(image).width(200).url(),
          caption: caption ? caption[this.locale] : ''
        }
      })
    }
  },
  async asyncData() {
    let res1 = await sanityClient.fetch(query1)
    let res2 = await sanityClient.fetch(query2)
    return {...res1, ...res2}
  },
  mounted() {
    console.log(this)
    this.onResize()
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
    console.log({route: this.$route})
    const { slug } = this.$route.params
    if (slug && this.formattedTips[slug]) {
      try {
        this.showImage(slug)
      } catch (error) {
        console.error('not a valid image')
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth
    },
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
  .pb-full {
    padding-bottom: 100%;
  }
  .list-content {
    display: flex;
    flex-direction: column;
    padding: 1em;
    width: 100%;
  }
  .list-content div {
    flex: 1 0 auto;
  }
</style>
