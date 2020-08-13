<template>
  <section class="py-8 max-w-6xl mx-auto">
    <div class="flex justify-center">
      <youtube :video-id="getYoutubeId(url)" />
    </div>
    <h1 class="text-2xl text-center">{{ name }}</h1>
    <div :v-if="description.length > 0">
      <BlockContent v-if="description" :blocks="description" />
    </div>
    <!-- <div v-if="relatedVideos.length">
      <div v-for="video in relatedVideos"
      :key="video.url" :video="video">
      {{video}}</div>
    </div> -->

  </section>
</template>

<script>
import groq from 'groq'
import getYoutubeId from 'get-youtube-id'
import sanityClient from '~/sanityClient'
// import SanityImage from '~/components/SanityImage'
// import SessionItem from '~/components/SessionItem'
import BlockContent from 'sanity-blocks-vue-component'
// import VideoThumbnail from '~/components/VideoThumbnail'
import blocksToText from '~/lib/blocksToText'


const query = groq`
  *[_type == "video" && slug.current == $slug][0] {..., "id": _id}
`

export default {
  components: {
    // SanityImage,
    BlockContent,
    // VideoThumbnail
    // SessionItem
  },
  data() {
    return {
      name: undefined,
      description: [],
      relatedVideos: [],
      program: this.$store.getters.getProgram,
      plainTextBio: blocksToText(this.bio)
    }
  },
  methods: {
    getYoutubeId(url) {
      return getYoutubeId(url)
    }
  },
  computed: {
    scheduleItems: data => {
      return data.program.schedule.filter(item => {
        return (
          item.session &&
          item.session.persons &&
          item.session.persons.filter(person => person.person._id === data.id)
            .length > 0
        )
      })
    }
  },
  async asyncData({ params }) {
    return await sanityClient.fetch(query, params)
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
