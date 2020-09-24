<template>
  <div class="pt-8 max-w-5xl mx-auto md:pt-32 mb-8 content px-8 lg:px-0 w-full">
    <h1 class="text-blue font-bold italic uppercase text-6xl text-center">
      {{partnersSectionTitle[locale]}}
    </h1>
    <div class="max-w-5xl flex flex-wrap w-full -mx-4">
      <Partner v-for="partner in partners" :key="partner._id" :partner="partner"
      class="p-2" />
    </div>
  </div>
</template>

<script>
import Partner from '~/components/resources/Partner'
import groq from 'groq'
import sanityClient from '~/sanityClient'

const query = groq`
  *[_id == "page-resources"][0] {
    ...,
    partners[]->{
      ...
    }
  }
`

export default {
  components: { Partner },
  computed: {
    locale() { return this.$i18n.locale },
  },
  async asyncData() {
    return await sanityClient.fetch(query)
  }
}
</script>
