<template>
  <div class="w-full">
    <Hero :image="hero.image" :full-height="hero.fullHeight" :title="title[locale]"
    x-axis-location="start" class="mb-8" />
    <div class="flex flex-wrap px-4 max-w-5xl m-auto mb-4">

      <template v-for="(block, i) in joinBlocks">
        <div :key="block._id"
        class="w-full md:w-1/2 px-8 flex flex-col items-center md:-ml-4 mb-16">
          <SanityImage
          :image="block.icon"
          :width="100"
          :height="100" fit="crop"
          class="mb-4" />
          <div class="w-full text-lg mb-4 text-center font-bold text-blue">
            <BlockContent :blocks="block[`${locale}Text`]" />
          </div>
          <div class="w-full flex justify-center">
            <CustomButton :button="block.button"
            class="bg-pink rounded-lg p-2 py-1 text-2xl font-bold italic tracking-wide text-white" />
          </div>
        </div>

        <VerticalDivider v-if="i % 2 !== 1" :key="block._id" />
      </template>
    </div>

    <NewsletterSubscription :newsletter-info="newsletterSubscription" class="-mb-8" />
  </div>
</template>

<script>
import axios from 'axios'
import groq from 'groq'
import sanityClient from '~/sanityClient'
import Hero from '~/components/blocks/Hero'
import SanityImage from '~/components/SanityImage'
import BlockContent from 'sanity-blocks-vue-component'
import NewsletterSubscription from '~/components/blocks/NewsletterSubscription'
import CustomButton from '~/components/blocks/CustomButton'
import VerticalDivider from '~/components/blocks/VerticalDivider'

const query = groq`
  *[_id == "page-join"][0] {
    ...
  }
`

export default {
  components: {
    CustomButton,
    Hero,
    BlockContent,
    NewsletterSubscription,
    SanityImage,
    VerticalDivider
  },
  computed: {
    locale() { return this.$i18n.locale }
  },
  async asyncData() {
    return await sanityClient.fetch(query)
  },
  async mounted() {
    const SANITY_API_URL = 'https://pb0hrpvr.api.sanity.io/v1/data/query/production?'
    const query = `*[_id == "page-resources"][0] {
        books[]->{
          slug
        },
        tips[]->{
          ...
        }
      }`
    const qs = encodeURIComponent(query)
    // const qs = '*%5B_id%20%3D%3D%20%22page-resources%22%5D%5B0%5D%20%7B%0A%20%20%20%20books%5B%5D-%3E%7B%0A%20%20%20%20%20%20slug%0A%20%20%20%20%7D%0A%20%20%7D'
    // const url = `${SANITY_API_URL}?query=${qs}"`
    const url = `${SANITY_API_URL}query=${qs}`
    const { data } = await axios.get(url)
    console.log({ data })
    console.log(data.result.books.map(book => book.slug.current))
    console.log(data.result.tips.map((tip, i) => i))
  }
}
</script>
