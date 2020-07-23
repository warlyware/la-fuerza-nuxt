<template>
  <section class="flex max-w-4xl mx-auto justify-between p-4">
    <div v-for="video in videos" :key="video.name">
      <img :src="getVideoImage(video.url)" alt="">
      {{ video }}
    </div>
  </section>
</template>

<script>
import getYoutubeId from 'get-youtube-id'
import groq from 'groq'
import sanityClient from '~/sanityClient'
// import SanityImage from '~/components/SanityImage'

const query = groq`
  {
    "videos": *[_type == "video"]
  }
`

export default {
  async asyncData() {
    return await sanityClient.fetch(query)
  },
  // components: {
    // SanityImage
  // },
  methods: {
    getVideoImage(url) {
      const id = getYoutubeId(url)
      return `https://img.youtube.com/vi/${id}/hqdefault.jpg`
    }
  }
}
</script>
