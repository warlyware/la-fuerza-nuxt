<template>
  <section class="pt-8 max-w-5xl mx-auto">
    <div class="flex justify-center mb-8">
      <youtube :video-id="getYoutubeId(url)" />
    </div>
    <h1 class="text-2xl text-center">{{ name }}</h1>
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


const query = groq`
  *[_type == "video" && slug.current == $slug][0] {
    "id": _id, url, name, description,
    "relatedVideos": relatedVideos[].video->{
      ...
    }
  }
`

export default {
  components: {
    // SanityImage,
    BlockContent,
    RelatedVideos
    // SessionItem
  },
  data() {
    return {
      description: null,
      name: null,
      relatedVideos: [],
      url: null,
      videoRaw: {},
    }
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
  mounted() {
    // console.log(this)
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
