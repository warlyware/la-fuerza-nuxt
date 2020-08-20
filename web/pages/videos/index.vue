<template>
  <section class="pt-8">
    <h1 class="text-5xl text-center italic">
      {{ $t('videos.title') }}
    </h1>

    <h2>
      {{ name }}
    </h2>
    <YoutubePlayer v-if="playlists[0]" :raw-playlist="playlists[0]" />
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
      name: '',
      playlists: []
    }
  },
  async mounted() {
    const playlistIds = ['PLRXlgtNPU7wJ0jdbPGylii5TvjNH0CQyG']
    playlistIds.forEach(async id => {
      const { playlist } = await getYtPlaylist(id)
      this.playlists.push(playlist)
    })
  }
}
</script>
