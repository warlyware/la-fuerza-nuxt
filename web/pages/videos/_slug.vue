<template>
  <section class="pt-8 max-w-5xl mx-auto">
    <div class="flex justify-center mb-8">
      <youtube :video-id="getYoutubeId(url)" />
    </div>
    <div class="flex justify-between items-center mb-6">
      <div class="p-2"></div>
      <h1 class="text-2xl text-center m-0">{{ name }}</h1>
      <ShareMenu :url="currentUrl" />
    </div>

    {{shortDescription}}
    <!-- <div :v-if="description.length > 0" class="mb-8">
      <BlockContent v-if="description" :blocks="description" />
    </div> -->
    <div :v-if="description.length > 0" class="mb-8">
      <BlockContent v-if="description" :blocks="description" />
    </div>
    <RelatedVideos v-if="relatedVideos.length" :related-videos="relatedVideos" />
  </section>
</template>

<script>
import groq from 'groq'
import getYoutubeId from 'get-youtube-id'
import sanityClient from '~/sanityClient'
// import SanityImage from '~/components/SanityImage'
// import SessionItem from '~/components/SessionItem'
import BlockContent from 'sanity-blocks-vue-component'
import RelatedVideos from '~/components/RelatedVideos'
import ShareMenu from '~/components/ShareMenu'


const query = groq`
  *[_type == "video" && slug.current == $slug][0] {
    "id": _id, url, name, description, shortDescription,
    "relatedVideos": relatedVideos[].video->{
      ...
    }
  }
`

export default {
  components: {
    // SanityImage,
    BlockContent,
    RelatedVideos,
    ShareMenu
    // SessionItem
  },
  data() {
    return {
      description: null,
      name: null,
      relatedVideos: [],
      url: null,
      videoRaw: {}
    }
  },
  computed: {
    currentUrl() { return process.env.BASE_URL + this.$route.fullPath }
  },
  async asyncData({ params }) {
    const videoRaw = await sanityClient.fetch(query, params)
    return { videoRaw, ...videoRaw }
  },
  methods: {
    getYoutubeId(url) {
      return getYoutubeId(url)
    }
  },
  head() {
    return {
      title: `Videos | ${this.name}`,
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
