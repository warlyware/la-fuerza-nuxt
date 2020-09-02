<template>
  <div class="w-full max-w-3xl mx-auto justify-between p-4 md:p-0">
    <div class="flex flex-wrap w-full uppercase mb-8">
      <h2 class="w-full mb-0 font-bold leading-tight">
        {{bookSectionTitle[locale]}}
      </h2>
      <p class="italic">
        {{bookSectionDescription[locale]}}
      </p>
      <ul class="w-full flex flex-wrap m-auto">
        <li v-for="book in first4Books" :key="book._id"
        class="flex w-full md:w-1/5" @click="$router.push(`/resources/books/${book.slug.current}`)">
          <div class="list-content items-center my-2">
            <div :style="`background-image: url(${ getImageUrl(book[`${locale}Cover`]) })`"
            class="cursor-pointer bg-contain bg-no-repeat bg-center w-full h-96 md:h-48" />
          </div>
        </li>
        <li class="w-full md:w-1/5 flex items-center justify-center md:justify-start flex-shrink">
          <div class="mt-4 md:mt-0 m-0 py-0 md:ml-4">
            <nuxt-link to="/resources/books"
            class="bg-aqua text-white text-shadow-pink px-4 rounded-lg italic uppercase text-2xl md:text-lg">
              {{viewMore}}
            </nuxt-link>
          </div>
        </li>
      </ul>
    </div>
    <div class="flex flex-wrap w-full uppercase mb-8">
      <h2 class="w-full mb-0 font-bold leading-tight">
        {{tipSectionTitle[locale]}}
      </h2>
      <p class="italic">
        {{tipSectionDescription[locale]}}
      </p>

      <ul class="w-full flex flex-wrap m-auto">
        <li v-for="(tip, i) in first4Tips" :key="tip._id"
        class="flex w-full md:w-1/5">
          <div class="list-content items-center my-2">
            <div :style="`background-image: url(${ getImageUrl(tip.image) })`"
            class="cursor-pointer bg-contain bg-no-repeat bg-center w-full h-96 md:h-48"
            @click="$router.push(`/resources/tips/${i}`)" />
          </div>
        </li>
        <li class="w-full md:w-1/5 flex items-center justify-center md:justify-start flex-shrink">
          <div class="mt-4 md:mt-0 m-0 py-0 md:ml-4">
            <nuxt-link to="/resources/tips"
            class="bg-aqua text-white text-shadow-pink px-4 rounded-lg italic uppercase text-2xl md:text-lg">
              {{viewMore}}
            </nuxt-link>
          </div>
        </li>
      </ul>

      <div class="w-full flex flex-wrap">
        <!-- <nuxt-link v-for="tip in first4Tips" :key="tip._id"
        :to="`/resources/tips`"
        class="p-2 w-full md:w-1/5 square-box">
          <SanityImage
          :image="tip.image"
          :height="300"
          fit="crop" class="square-content" />
        </nuxt-link> -->
        <!-- <div class="w-1/2 md:w-1/5">
          <img class="p-2 cursor-pointer" src="//placehold.it/300" alt="">
        </div>
        <div class="w-1/2 md:w-1/5">
          <img class="p-2 cursor-pointer" src="//placehold.it/300" alt="">
        </div>
        <div class="w-1/2 md:w-1/5">
          <img class="p-2 cursor-pointer" src="//placehold.it/300" alt="">
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import groq from 'groq'
import sanityClient from '~/sanityClient'
import imageUrlBuilder from '@sanity/image-url'
const builder = imageUrlBuilder(sanityClient)

const query = groq`
  *[_id == "page-resources"][0] {
    ...,
    books[]->{
      ...
    },
    tips[]->{
      ...
    }
  }
`

export default {
  computed: {
    locale() { return this.$i18n.locale },
    first4Books() { return this.books.length <= 4 ? this.books : this.books.slice(0, 4)},
    first4Tips() { return this.tips.length <= 4 ? this.tips : this.tips.slice(0, 4)},
    viewMore() { return this.locale === 'en' ? 'View More' : 'Ver Más' },
  },
  async asyncData() {
    return await sanityClient.fetch(query)
  },
  methods: {
    getImageUrl(image) { return builder.image(image).url() }
  }
}
</script>

<style scoped>
.list-content {
  display: flex;
  flex-direction: column;
	width: 100%;
}
.list-content div {
	flex: 1 0 auto;
}
</style>
