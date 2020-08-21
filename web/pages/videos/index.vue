<template>
  <section class="pt-8">
    <h1 class="text-5xl text-center italic">
      {{ $t('videos.title') }}
    </h1>

    <template v-if="playlists.length">
      <div v-for="{ playlist, title, description } in playlists" :key="playlist.id"
      class="max-w-video-player m-auto mb-8">
        <h2 class="mb-0 uppercase text-4xl">
          {{title}}
        </h2>
        <p class="mb-8 font-bold">{{description}}</p>
        <YoutubePlayer
        :raw-playlist="playlist" />
      </div>
    </template>
  </section>


</template>

<script>
import YoutubePlayer from '~/components/video/YoutubePlayer'
import { getYtPlaylist } from '~/lib/api'
export default {
  components: {
    YoutubePlayer
  },
  data() {
    return {
      playlists: []
    }
  },
  async mounted() {
    const videoCategories = [
      {
        playlistId: 'PLRXlgtNPU7wJ0jdbPGylii5TvjNH0CQyG',
        title: 'Momentos de Connexion',
        description: 'This is a description of the category.'
      },
      {
        playlistId: 'PLAXKIS0jXy64fre2EuL12XU7rBHJH16oN',
        title: 'Juntas en Casa',
        description: 'This is a description of the category.'
      },
    ]
    // const playlistIds = ['PLRXlgtNPU7wJ0jdbPGylii5TvjNH0CQyG', 'PLAXKIS0jXy64fre2EuL12XU7rBHJH16oN']
    videoCategories.forEach(async ({ playlistId, title, description }) => {
      const { playlist } = await getYtPlaylist(playlistId)
      this.playlists.push({ title, playlist, description })
    })
  }
}
</script>

<style>
.max-w-video-player {
  max-width: 1200px;
}
</style>
