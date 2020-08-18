<template>
  <section class="pt-8 max-w-5xl mx-auto">
    <div class="flex justify-center mb-8">
      <youtube :video-id="getYoutubeId(video.url)" />
    </div>
    <div class="flex justify-between items-center mb-6">
      <div class="p-2"></div>
      <h1 class="text-2xl text-center m-0">{{ video.name }}</h1>
      <ShareMenu :url="currentUrl" />
    </div>
    <!-- <div :v-if="description.length > 0" class="mb-8">
      <BlockContent v-if="description" :blocks="description" />
    </div> -->
    <div :v-if="description && description.length > 0" class="mb-8">
      <BlockContent v-if="description" :blocks="description" />
    </div>
    <RelatedVideos v-if="video.relatedVideos.length" :related-videos="video.relatedVideos" />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

import getYoutubeId from 'get-youtube-id'
// import sanityClient from '~/sanityClient'
// import SanityImage from '~/components/SanityImage'
// import SessionItem from '~/components/SessionItem'
import BlockContent from 'sanity-blocks-vue-component'
import RelatedVideos from '~/components/RelatedVideos'
import ShareMenu from '~/components/ShareMenu'

export default {
  components: {
    // SanityImage,
    BlockContent,
    RelatedVideos,
    ShareMenu
    // SessionItem
  },
  computed: {
    language() { return this.$i18n.locale },
    description() { return this.language === 'en' ? this.video.descriptionEnglish : this.video.descriptionSpanish },
    currentUrl() { return process.env.BASE_URL + this.$route.fullPath },
    ...mapGetters(['video']),
  },
  async asyncData({ params, store }) {
    await store.dispatch('getVideo', params)
  },
  methods: {
    getYoutubeId(url) {
      return getYoutubeId(url)
    }
  },
  head() {
    return {
      title: `Videos | ${this.video.name}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.plainTextBio
        }
      ]
    }
  }
}
</script>
