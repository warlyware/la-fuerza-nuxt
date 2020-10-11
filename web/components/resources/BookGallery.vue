<template>
  <div class="max-w-5xl w-full m-auto flex flex-wrap md:justify-around items-center px-4">
    <div class="w-full md:w-1/4 flex justify-center">
      <nuxt-link class="p-2 py-1 font-bold italic text-2xl uppercase text-white rounded-lg tracking-wide my-2"
      :class="previousBookLink ? ' bg-pink': 'bg-gray cursor-not-allowed'"
      :to="localePath(`/resources/read-alouds/${previousBookLink}`)">
        {{ previousBookText }}
      </nuxt-link>
    </div>
    <div v-if="books.length" class="hidden md:flex md:w-1/2 justify-around items-center">
      <BookGalleryItem v-for="book in books" :key="book._id"
      :class="currentBookId === book._id ? 'border-2 rounded border-aqua' : ''"
      :book="book" />
    </div>
    <div class="w-full md:w-1/4 flex justify-center">
      <nuxt-link class="p-2 py-1 font-bold italic text-2xl uppercase text-white rounded-lg tracking-wide my-2"
      :class="nextBookLink ? ' bg-pink': 'bg-gray cursor-not-allowed'"
      :to="nextBookLink ? localePath(`/resources/read-alouds/${nextBookLink}`) : ''"
      >
        {{ nextBookText }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import BookGalleryItem from '~/components/resources/BookGalleryItem'
import groq from 'groq'
import sanityClient from '~/sanityClient'

const query = groq`
  *[_id == "page-resources"][0] {
    books[]->{
      ...
    }
  }
`

export default {
  components: { BookGalleryItem },
  props: {
    currentBookId: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      books: [],
      previousBookLink: '',
      nextBookLink: ''
    }
  },
  computed: {
    locale() { return this.$i18n.locale },
    previousBookText() { return this.locale === 'en' ? 'Previous' : 'Anterior' },
    nextBookText() { return this.locale === 'en' ? 'Next' : 'Siguiente' },
  },
  async created() {
    this.books = await this.getBooks()
  },
  methods: {
    async getBooks() {
      const data = await sanityClient.fetch(query)
      console.log({ data })
      if (data.books.length === 0) { return [] }
      let currentBook = data.books.find(({ _id }) => _id === this.currentBookId)
      let currentBookIndex = data.books.indexOf(currentBook)

      // if (this.books.length <= 3) { return this.books }
      let books = []
      if (data.books[currentBookIndex - 1]) {
        this.previousBookLink = data.books[currentBookIndex - 1].slug.current
        books.push(data.books[currentBookIndex - 1])
      }
      books.push(data.books[currentBookIndex])
      if (data.books[currentBookIndex + 1]) {
        this.nextBookLink = data.books[currentBookIndex + 1].slug.current
        books.push(data.books[currentBookIndex + 1])
      }
      return books
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
