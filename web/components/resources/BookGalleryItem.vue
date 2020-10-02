<template>
  <div class="w-full lg:w-1/2 flex justify-center">
    <nuxt-link :to="localePath(`/resources/books/${book.slug.current}`)"
    class="p-2 w-32 flex-shrink-0">
      <SanityImage
      :image="book[`${locale}Cover`]"
      :height="400"
      fit="crop" />
    </nuxt-link>
  </div>
</template>

<script>
import SanityImage from '~/components/SanityImage'

export default {
  components: {
    SanityImage,
  },
  props: {
    book: {
      required: true,
      type: Object
    }
  },
  computed: {
    locale() { return this.$i18n.locale }
  },
}
</script>
