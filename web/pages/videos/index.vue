<template>
  <section class="pt-8 max-w-5xl mx-auto">
    <h1 class="text-5xl text-center italic">
      {{ $t('videos.title') }}
    </h1>

    <h2>
      {{ name }}
    </h2>
    <YoutubePlayer :playlist="playlist" />
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
      playlist: []
    }
  },
  async mounted() {
    // console.log(getYtPlaylist)
    const { pageInfo, playlist } = await getYtPlaylist('PLRXlgtNPU7wJ0jdbPGylii5TvjNH0CQyG')
    this.playlist = playlist
    this.pageInfo = pageInfo
  }
}
</script>
