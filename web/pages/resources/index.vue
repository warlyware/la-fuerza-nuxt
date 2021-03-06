<template>
  <div class="w-full max-w-3xl mx-auto justify-between p-4 md:p-0">
    <div class="flex flex-wrap w-full mb-8">
      <h2 class="w-full mb-0 font-bold leading-tight text-blue">
        {{bookSectionTitle[locale]}}
      </h2>
      <p class="text-blue">
        <BlockContent :blocks="this[`${locale}BookSectionDescription`]" />
      </p>
      <ul class="w-full flex flex-wrap m-auto">
        <li v-for="book in first4Books" :key="book._id"
        class="flex w-full md:w-1/5 text-blue"
        @click="$router.push(localeRoute(`/resources/read-alouds/${book.slug.current}`))">
          <div class="list-content items-center my-2">
            <div :style="`background-image: url(${ getImageUrl(book[`${locale}Cover`]) })`"
            class="cursor-pointer bg-contain bg-no-repeat bg-center w-full h-96 md:h-48" />
          </div>
        </li>
        <li class="w-full md:w-1/5 flex items-center justify-center md:justify-start flex-shrink">
          <div class="mt-4 md:mt-0 m-0 py-0 md:ml-4">
            <nuxt-link v-if="books.length > 4" :to="localePath('/resources/read-alouds')"
            class="bg-aqua text-white text-shadow-pink px-4 rounded-lg italic uppercase text-2xl md:text-lg">
              {{viewMore}}
            </nuxt-link>
          </div>
        </li>
      </ul>
    </div>
    <div class="flex flex-wrap w-full mb-8">
      <h2 class="w-full mb-0 font-bold leading-tight uppercase text-blue">
        {{tipSectionTitle[locale]}}
      </h2>
      <p class="text-blue">
        <BlockContent :blocks="this[`${locale}TipSectionDescription`]" />
      </p>

      <ul class="w-full flex flex-wrap m-auto">
        <li v-for="(tip, i) in first4Tips" :key="tip._id"
        class="flex w-full md:w-1/5 text-blue">
          <div class="list-content items-center my-2">
            <div :style="`background-image: url(${ getImageUrl(tip.image) })`"
            class="cursor-pointer bg-contain bg-no-repeat bg-center w-full h-96 md:h-48"
            @click="$router.push(localeRoute(`/resources/tips/${i}`))" />
          </div>
        </li>
        <li class="w-full md:w-1/5 flex items-center justify-center md:justify-start flex-shrink">
          <div class="mt-4 md:mt-0 m-0 py-0 md:ml-4">
            <nuxt-link v-if="tips.length > 4" :to="localePath('/resources/tips')"
            class="bg-aqua text-white text-shadow-pink px-4 rounded-lg italic uppercase text-2xl md:text-lg">
              {{viewMore}}
            </nuxt-link>
          </div>
        </li>
      </ul>
    </div>
    <div v-if="partners.length" class="flex flex-wrap w-full">
      <h2 class="w-full mb-0 font-bold leading-tight uppercase text-blue">
        {{partnersSectionTitle[locale]}}
      </h2>
      <p class="text-blue">
        <BlockContent :blocks="this[`${locale}PartnersSectionDescription`]" />
      </p>

      <ul class="w-full flex flex-wrap m-auto">
        <li v-for="partner in first4Partners" :key="partner._id"
        class="flex w-full md:w-1/5 px-2 mx-16 md:mx-0">
          <div class="list-content items-center my-2 bg-blue px-2">
            <div :style="`background-image: url(${ getImageUrl(partner.logo) })`"
            class="cursor-pointer bg-contain bg-no-repeat bg-center w-full h-96 md:h-48"
            @click="$router.push(localeRoute(`/resources/partners/${partner.slug.current}`))" />
          </div>
        </li>
        <li class="w-full md:w-1/5 flex items-center justify-center md:justify-start flex-shrink">
          <div class="mt-4 md:mt-0 m-0 py-0 md:ml-4">
            <nuxt-link v-if="partners.length > 4" :to="localePath('/resources/partners')"
            class="bg-aqua text-white text-shadow-pink px-4 rounded-lg italic uppercase text-2xl md:text-lg">
              {{viewMore}}
            </nuxt-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import groq from 'groq'
import sanityClient from '~/sanityClient'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from 'sanity-blocks-vue-component'
const builder = imageUrlBuilder(sanityClient)

const query = groq`
  *[_id == "page-resources"][0] {
    ...,
    books[]->{
      ...
    },
    tips[]->{
      ...
    },
    partners[]->{
      ...
    }
  }
`

export default {
  components: {
    BlockContent
  },
  computed: {
    locale() { return this.$i18n.locale },
    first4Books() { return this.books.length <= 4 ? this.books : this.books.slice(0, 4)},
    first4Tips() { return this.tips.length <= 4 ? this.tips : this.tips.slice(0, 4)},
    first4Partners() { return this.partners.length <= 4 ? this.partners : this.partners.slice(0, 4)},
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
