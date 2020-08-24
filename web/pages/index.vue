<template>
  <div class="mx-auto justify-between pt-4 w-full">
    <div class="w-full flex flex-wrap">
      <div class="w-full md:w-2/3 my-1/2">
        <youtube player-width="100%" player-height="100%"
        class="video-responsive flex-grow"
        video-id="EBRsKQkuZN8" />
      </div>
      <div class="w-full md:w-1/3 bg-pink text-white flex justify-center items-center leading-tight p-8">
        <span class="uppercase text-3xl font-MissionGothicBlackItalic">Cómo Reconoces tu Poder?</span>
      </div>
    </div>
    <div class="font-MissionGothicBlackItalic">
      <h1 class="text-aqua text-pink-shadow-side text-3xl uppercase w-full text-center pt-8">
        Recursos Para las Familias Latinas
      </h1>
      <div class="flex w-full flex-wrap items-center justify-around pb-12">
        <button class="w-full md:w-auto bg-pink text-white text-aqua-shadow text-2xl rounded px-2 uppercase mx-4 mb-2">
          Videos
        </button>
        <button class="w-full md:w-auto bg-aqua text-white text-pink-shadow text-2xl rounded px-2 uppercase mx-4 mb-2">
          Talleres
        </button>
        <button class="w-full md:w-auto bg-pink text-white text-aqua-shadow text-2xl rounded px-2 uppercase mx-4 mb-2">
          Cuentos
        </button>
        <button class="w-full md:w-auto bg-aqua text-white text-pink-shadow text-2xl rounded px-2 uppercase mx-4 mb-2">
          Consejos
        </button>
      </div>
    </div>

    <div class="w-full flex flex-wrap pb-8">
      <div class="w-full order-1 md:w-1/3 bg-blue text-white flex flex-col justify-center items-center leading-tight p-8 italic">
        <div class="uppercase text-3xl font-MissionGothicBlackItalic text-aqua pb-4">
          únete a Nosotros!
        </div>
        <div class="w-full">
          Nombre
          <input type="text" class="bg-blue border-b w-2/3">
        </div>
        <div class="w-full">
          E-mail
          <input type="text" class="bg-blue border-b w-2/3">
        </div>
        <div class="w-full">
          Estado
          <input type="text" class="bg-blue border-b w-2/3">
        </div>
        <div class="w-full">
          Móvil
          <input type="text" class="bg-blue border-b w-2/3">
        </div>
        <button class="w-full md:w-auto bg-aqua text-white text-pink-shadow text-2xl rounded px-2 uppercase mx-4 mb-2p mt-4">
          Submit
        </button>
      </div>
      <div class="w-full order-first md:order-last md:w-2/3 my-1/2">
        <youtube player-width="100%" player-height="100%"
        class="video-responsive flex-grow"
        video-id="qREKP9oijWI" />
      </div>
    </div>

    <div class="w-full flex flex-wrap">
      <div class="w-full md:w-1/2">
        <youtube player-width="100%" player-height="100%"
        class="video-responsive flex-grow"
        video-id="BHACKCNDMW8" />
      </div>
      <div class="w-full md:w-1/2">
        <youtube player-width="100%" player-height="100%"
        class="video-responsive flex-grow"
        video-id="buqt6_CjtuI" />
      </div>
    </div>
  </div>


  <!-- <section class="max-w-5xl mx-auto justify-between p-4">
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
  .my-1\/2 {
    margin-top: 2px;
    margin-bottom: 2px;
  }

</style>
