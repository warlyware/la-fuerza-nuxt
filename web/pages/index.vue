<template>
  <div class="max-w-4xl mx-auto justify-between p-4">
    <h1 class="text-2xl text-center">
      Home Page
    </h1>
  </div>

  <!-- <section class="max-w-4xl mx-auto justify-between p-4">
    <div class="flex w-full justify-center py-4">
      <button class="p-4 text-xl uppercase"
      :class="{ active: selectedCategory === 'videos'}"
      @click="selectedCategory = 'videos'">
        Videos
      </button>
      <button class="p-4 text-xl uppercase"
      :class="{ active: selectedCategory === 'talleres'}"
      @click="selectedCategory = 'talleres'">
        Talleres
      </button>
      <button class="p-4 text-xl uppercase"
      :class="{ active: selectedCategory === 'librosEnEspanol'}"
      @click="selectedCategory = 'librosEnEspanol'">
        Libros en Español
      </button>
    </div>

    <div class="flex w-full flex-wrap">
      <div v-for="video in filteredVideos" :key="video.name"
      class="w-1/3" @click="goToVideo(video.slug.current)">
        <VideoThumbnail class="p-4 cursor-pointer" :video="video"/>
      </div>
    </div>
  </section> -->
</template>

<script>
import groq from 'groq'
import sanityClient from '~/sanityClient'
// import VideoThumbnail from '~/components/VideoThumbnail'
// import SanityImage from '~/components/SanityImage'

const query = groq`
  {
    "videos": *[_type == "video"]
  }
`

export default {
  components: {
    // VideoThumbnail
    // SanityImage
  },
  data() {
    return {
      selectedCategory: 'videos'
    }
  },
  computed: {
    filteredVideos() {
      return this.videos.filter(video => video.category === this.selectedCategory)
    }
  },
  async asyncData() {
    return await sanityClient.fetch(query)
  },
  methods: {
    goToVideo(slug) {
      this.$router.push(`/videos/${slug}`)
    }
  },
}
</script>

<style scoped>
  .active {
    @apply .bg-blue .text-white .rounded;
  }

</style>
