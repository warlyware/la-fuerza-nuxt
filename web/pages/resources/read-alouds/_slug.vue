<template>
  <div class="pt-8 mx-auto md:pt-32 mb-8 content w-full">
    <LightBox ref="lightbox" :show-thumbs="false"
    :media="lightboxImages" :show-light-box="showLightBox" />

    <div class="w-full flex flex-wrap px-4">
      <div class="w-full lg:w-1/2 my-1/2 order-last md:order-none">
        <youtube player-width="100%" player-height="100%"
        class="video-responsive flex-grow"
        :video-id="getYoutubeId(videoUrl)"  />
      </div>
      <div class="w-full lg:w-1/2 bg-pink text-white flex justify-center items-center leading-tight p-8 font-bold text-4xl">
        {{title[locale]}}
      </div>
    </div>

    <ShareMenu class="w-full flex justify-center mt-4" :share-menu="shareMenu" />

    <div class="flex flex-wrap max-w-5xl m-auto px-8 lg:px-0 justify-center mb-6">
      <p class="py-2 w-full text-blue">
        <BlockContent v-if="this[`${locale}Description`]" :blocks="this[`${locale}Description`]" />
        <span class="font-bold">
          {{author}}
        </span>
        <span v-if="illustrator && illustrator.length"
        class="font-bold">
          &nbsp;/ {{illustrator}}
        </span>
        <span v-if="publisher && publisher.length"
        class="font-bold">
          &nbsp;/ {{publisher}}
        </span>
      </p>
    </div>
    <Divider class="max-w-6xl m-auto -my-8 px-4" />
    <div class="w-full max-w-3xl m-auto flex flex-wrap justify-center px-8 md:px-4 lg:px-0 text-blue mb-8 mt-12">
      <BlockContent v-if="this[`${locale}Excerpt`]" :blocks="this[`${locale}Excerpt`]" />
    </div>

    <div v-if="image1"
    class="flex w-full items-center my-2 px-4 md:px-2"
    @click="showImage(0)">
      <div :style="`background-image: url(${ getImageUrl(image1) })`"
      class="cursor-pointer bg-contain bg-no-repeat bg-center w-full h-image" />
    </div>
    <!-- <div v-if="image1"
    class="w-full max-w-xl m-auto flex flex-wrap cursor-pointer mb-8"
    @click="showImage(0)">
      <SanityImage
      class="w-full bg-blue flex-shrink-0 justify-center items-center"
      alt="Image from book"
      :image="image1"
      :width="400"
      fit="crop" />
    </div> -->
    <Divider class="max-w-6xl m-auto px-4 mb-4" />
    <h2 class="w-full text-center uppercase text-4xl text-blue">
      {{ moreBooksTitleText }}
    </h2>
    <BookGallery
    :current-book-id="id" />
  </div>
</template>

<script>
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '~/sanityClient'
const builder = imageUrlBuilder(sanityClient)
import LightBox from 'vue-image-lightbox'
import ShareMenu from '~/components/ShareMenu'
import Divider from '~/components/blocks/Divider'
import BookGallery from '~/components/resources/BookGallery'
// import SanityImage from '~/components/SanityImage'
import getYoutubeId from 'get-youtube-id'
import BlockContent from 'sanity-blocks-vue-component'
import groq from 'groq'

const query = groq`
  *[_type == "book" && slug.current == $slug][0] {..., "id": _id}
`

export default {
  components: {
    BlockContent,
    Divider,
    BookGallery,
    LightBox,
    // SanityImage,
    ShareMenu
  },
  data() {
    return {
      showLightBox: false
    }
  },
  computed: {
    locale() { return this.$i18n.locale },
    image1Src() { return this.getImageUrl(this.image1) },
    image2Src() { return this.getImageUrl(this.image2) },
    moreBooksTitleText() { return this.locale === 'en' ? 'More Books' : 'Más Libros' },
    lightboxImages() {
      let images = []

      if (this.image1) {
        images.push({
          image: this.image1,
          src: builder.image(this.image1).url(),
          thumb: builder.image(this.image1).width(200).url()
        })
      }

      if (this.image2) {
        images.push({
          image: this.image2,
          src: builder.image(this.image2).url(),
          thumb: builder.image(this.image2).width(200).url()
        })
      }

      return images
    }
  },
  async asyncData({ params, seo, app }) {
    const locale = app.i18n.locale || 'es'
    const data = await sanityClient.fetch(query, params)
    const bookTitle = data.title[locale]
    const description = data.author ? `by ${data.author}` : null
    const image = builder.image(data[`${locale}Cover`]).url()
    seo({
      name: 'La Fuerza de Familias Latinas',
      title: bookTitle,
      templateTitle: bookTitle ? '%name% - %title%' : '%name%',
      image,
      description
    })
    return data
  },
  created() {
    this.showLightBox = false
  },
  methods: {
    getImageUrl(image) {
      return builder.image(image)
    },
    getYoutubeId,
    showImage(i) {
      this.showLightBox = true
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
