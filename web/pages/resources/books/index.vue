<template>
  <div class="pt-8 max-w-5xl mx-auto md:pt-32 mb-8 content px-8 lg:px-0 w-full">
    <h1 class="font-bold text-6xl">
      {{bookSectionTitle[locale]}}
    </h1>
    <div class="max-w-5xl flex flex-wrap w-full -mx-4">
      <Book v-for="book in books" :key="book._id" :book="book"
      class="p-2" />
    </div>
  </div>
</template>

<script>
import Book from '~/components/resources/Book'
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
  components: { Book },
  computed: {
    locale() { return this.$i18n.locale },
  },
  async asyncData() {
    return await sanityClient.fetch(query)
  }
}
</script>
