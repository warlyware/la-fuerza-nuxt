<template>
  <div class="max-w-5xl mx-auto justify-between p-4 md:p-0">
    <div class="flex flex-wrap w-full uppercase mb-8">
      <h2 class="w-full mb-0 font-bold leading-tight">
        {{bookSectionTitle[locale]}}
      </h2>
      <p class="italic">
        {{bookSectionDescription[locale]}}
      </p>
      <div class="w-full flex flex-wrap h-fill items-center -mx-2">
        <nuxt-link v-for="book in first4Books" :key="book._id"
        :to="`/resources/books/${book.slug.current}`"
        class="p-2 w-full md:w-1/5">
          <SanityImage
          :image="book[`${locale}Cover`]"
          :height="300"
          fit="crop" />
        </nuxt-link>
        <div class="w-full md:w-1/5 flex items-center justify-center md:justify-start flex-shrink">
          <div class="md-4 md:mt-0 m-0 py-0 md:ml-4">
            <nuxt-link to="/resources/books"
            class="bg-aqua text-white text-shadow-pink px-4 rounded-lg italic uppercase text-2xl md:text-lg">
              {{viewMore}}
            </nuxt-link>
          </div>
        </div>
          <!-- <img class="p-2 cursor-pointer" src="//placehold.it/300" alt=""> -->
      </div>
    </div>
    <div class="flex flex-wrap w-full uppercase mb-8">
      <h2 class="w-full mb-0 font-bold leading-tight">
        {{tipSectionTitle[locale]}}
      </h2>
      <p class="italic">
        {{tipSectionDescription[locale]}}
      </p>
      <div class="w-full flex flex-wrap">
        <div class="w-1/2 md:w-1/5">
          <img class="p-2 cursor-pointer" src="//placehold.it/300" alt="">
        </div>
        <div class="w-1/2 md:w-1/5">
          <img class="p-2 cursor-pointer" src="//placehold.it/300" alt="">
        </div>
        <div class="w-1/2 md:w-1/5">
          <img class="p-2 cursor-pointer" src="//placehold.it/300" alt="">
        </div>
        <div class="w-1/2 md:w-1/5">
          <img class="p-2 cursor-pointer" src="//placehold.it/300" alt="">
        </div>
        <div class="w-full md:w-1/5 flex items-center justify-center md:justify-start flex-shrink">
          <div class="md-4 md:mt-0 m-0 py-0 md:ml-4">
            <nuxt-link to="/resources/tips"
            class="bg-aqua text-white text-shadow-pink px-4 rounded-lg italic uppercase text-2xl md:text-lg">
              {{viewMore}}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SanityImage from '~/components/SanityImage'
import groq from 'groq'
import sanityClient from '~/sanityClient'

const query = groq`
  *[_id == "page-resources"][0] {
    ...,
    books[]->{
      ...
    }
  }
`

export default {
  components: { SanityImage },
  computed: {
    locale() { return this.$i18n.locale },
    first4Books() { return this.books.length <= 4 ? this.books : this.books.slice(0, 4)},
    viewMore() { return this.locale === 'en' ? 'View More' : 'Ver Más' },
  },
  async asyncData() {
    return await sanityClient.fetch(query)
  }
}
</script>
