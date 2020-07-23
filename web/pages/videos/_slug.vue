<template>
  <section class="py-8 max-w-4xl mx-auto">
    <!-- <SanityImage
      :v-if="image.asset"
      :image="image"
      :height="1200"
      :width="1200"
      class="image"
    /> -->
    <div class="flex justify-center">
      <youtube :video-id="getYoutubeId(url)" />
    </div>
    <h1 class="text-2xl text-center">{{ name }}</h1>
    <div class="bio" :v-if="description.length > 0">
      <BlockContent v-if="description" :blocks="description" />
    </div>
  </section>
</template>

<script>
import groq from 'groq'
import getYoutubeId from 'get-youtube-id'
import sanityClient from '~/sanityClient'
// import SanityImage from '~/components/SanityImage'
// import SessionItem from '~/components/SessionItem'
import BlockContent from 'sanity-blocks-vue-component'
import blocksToText from '~/lib/blocksToText'


const query = groq`
  *[_type == "video" && slug.current == $slug][0] {..., "id": _id}
`

export default {
  components: {
    // SanityImage,
    BlockContent,
    // SessionItem
  },
  data() {
    return {
      name: undefined,
      description: [],
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
    const { name } = this.$store.getters.eventInformation
    return {
      title: `Sessions | ${name}`,
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
