<template>
  <div class="flex flex-col h-full">
    <Header />
    <Sidebar :navigation="mainNavigation" />
    <nuxt class="pt-24 md:pt-32 mb-8" />
    <Footer :navigation="footerNavigation"
    :social-media-links="socialMediaLinks"
    :sponsors-block-title="sponsorsBlockTitle" />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Sidebar from '~/components/navigation/Sidebar.vue'
import groq from 'groq'
import sanityClient from '~/sanityClient'

const query = groq`
  *[_id == "settings"][0] {
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
      footerNavigation: [],
      facebookUrl: '',
      instagramUrl: '',
      twitterUrl: '',
      youtubeUrl: '',
      sponsorsBlockTitle: ''
    }
  },
  computed: {
    locale() { return this.$i18n.locale },
    socialMediaLinks() { return {
      facebookUrl: this.facebookUrl,
      instagramUrl: this.instagramUrl,
      twitterUrl: this.twitterUrl,
      youtubeUrl: this.youtubeUrl,
    }}
  },
  // mounted() {
  //   console.log(this)
  // },
  async fetch() {
    const data = await sanityClient.fetch(query)

    this.mainNavigation = data.mainNavigation
    this.sponsorsBlockTitle = data.sponsorsBlockTitle
    this.footerNavigation = data.footerNavigation
    this.facebookUrl = data.facebookUrl
    this.instagramUrl = data.instagramUrl
    this.twitterUrl = data.twitterUrl
    this.youtubeUrl = data.youtubeUrl
  }
}
</script>
