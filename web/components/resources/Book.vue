<template>
  <div class="w-full lg:w-1/2 flex cursor-pointer">
    <nuxt-link :to="`/resources/books/${book.slug.current}`"
    class="p-2 w-32 flex-shrink-0">
      <SanityImage
      :image="book[`${locale}Cover`]"
      :height="400"
      fit="crop" />
    </nuxt-link>
    <div class="flex flex-col h-full p-2 justify-start">
      <h2 class="text-2xl font-bold mb-2 line-clamp overflow-hidden">
        {{book.title[locale]}}
      </h2>
      <div class="text-sm leading-3 font-bold mb-8">
        by {{book.author}}
      </div>
      <div class="w-full">
        <button class="bg-aqua text-white text-shadow-pink px-2 py-0 rounded uppercase text-sm italic">
          {{readMore}}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import SanityImage from '~/components/SanityImage'

export default {
  components: {
    SanityImage
  },
  props: {
    book: {
      required: true,
      type: Object
    }
  },
  computed: {
    readMore() { return this.locale === 'en' ? 'Read More' : 'Leer Más' },
    locale() { return this.$i18n.locale }
  },
}
</script>
