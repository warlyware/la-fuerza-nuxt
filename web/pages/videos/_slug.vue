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

    {{video.shortDescription}}
    <!-- <div :v-if="description.length > 0" class="mb-8">
      <BlockContent v-if="description" :blocks="description" />
    </div> -->
    <!-- <div :v-if="video.description && video.description.length > 0" class="mb-8">
      <BlockContent v-if="video.description" :blocks="video.description" />
    </div> -->
    <!-- <RelatedVideos v-if="video.relatedVideos.length" :related-videos="video.relatedVideos" /> -->
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

import getYoutubeId from 'get-youtube-id'
// import sanityClient from '~/sanityClient'
// import SanityImage from '~/components/SanityImage'
// import SessionItem from '~/components/SessionItem'
// import BlockContent from 'sanity-blocks-vue-component'
// import RelatedVideos from '~/components/RelatedVideos'
import ShareMenu from '~/components/ShareMenu'


// const query = groq`
//   *[_type == "video" && slug.current == $slug][0] {
//     "id": _id, url, name, description, shortDescription,
//     "relatedVideos": relatedVideos[].video->{
//       ...
//     }
//   }
// `

export default {
  components: {
    // SanityImage,
    // BlockContent,
    // RelatedVideos,
    ShareMenu
    // SessionItem
  },
  computed: {
    currentUrl() { return process.env.BASE_URL + this.$route.fullPath },
    ...mapGetters(['video'])
  },
  async asyncData({ params, store }) {
    await store.dispatch('getVideo', params)
    // const videoRaw = await sanityClient.fetch(query, params)

    // return { videoRaw, ...videoRaw }
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
