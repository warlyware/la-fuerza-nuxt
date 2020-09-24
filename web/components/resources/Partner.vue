<template>
  <div class="w-full lg:w-1/2 flex cursor-pointer">
    <nuxt-link :to="localePath(`/resources/partners/${partner.slug.current}`)"
    class="p-2 w-32 flex-shrink-0 bg-blue">
    <div class="list-content items-center my-2 bg-blue px-2">
      <div :style="`background-image: url(${ getImageUrl(partner.logo) })`"
      class="cursor-pointer bg-contain bg-no-repeat bg-center w-full h-32"
      @click="$router.push(localeRoute(`/resources/partners/${partner.slug.current}`))" />
    </div>
    </nuxt-link>
    <nuxt-link :to="localePath(`/resources/partners/${partner.slug.current}`)"
    class="flex flex-col h-full p-2 justify-start text-blue">
      <h2 class="text-2xl font-bold line-clamp overflow-hidden uppercase">
        {{partner.name}}
      </h2>
      <div class="text-sm leading-3 font-bold mb-8">
        {{partner.parentOrganization}}
      </div>
    </nuxt-link>
  </div>
</template>

<script>
// import SanityImage from '~/components/SanityImage'
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '~/sanityClient'
const builder = imageUrlBuilder(sanityClient)

export default {
  components: {
    // SanityImage
  },
  props: {
    partner: {
      required: true,
      type: Object
    }
  },
  computed: {
    readMore() { return this.locale === 'en' ? 'Read More' : 'Leer Más' },
    locale() { return this.$i18n.locale }
  },
  methods: {
    getImageUrl(image) { return builder.image(image).url() }
  }
}
</script>
