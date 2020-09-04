<template>
  <div class="flex flex-col h-full">
    <Header />
    <Sidebar :navigation="mainNavigation" />
    <nuxt class="pt-24 md:pt-32 mb-8" />
    <Footer :navigation="footerNavigation" />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Sidebar from '~/components/navigation/Sidebar.vue'
import groq from 'groq'
import sanityClient from '~/sanityClient'

const query = groq`
  *[_id == "navigation"][0] {
    ...
  }
`

export default {
  components: {
    Header,
    Footer,
    Sidebar
  },
  data() {
    return {
      mainNavigation: [],
      footerNavigation: []
    }
  },
  computed: {
    locale() { return this.$i18n.locale },
  },
  async fetch() {
    const { mainNavigation, footerNavigation } = await sanityClient.fetch(query)
    console.log({  mainNavigation, footerNavigation  })
    this.mainNavigation = mainNavigation
    this.footerNavigation = footerNavigation
  }
}
</script>
