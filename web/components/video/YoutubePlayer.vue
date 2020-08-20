<template>
  <div class="flex flex-wrap items-center">
    <youtube v-if="currentVideo"
    :video-id="currentVideo.id"
    @ready="ready" />
    {{currentVideo.description}}
  </div>
</template>

<script>
import getYoutubeId from 'get-youtube-id'

export default {
  props: {
    playlist: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentVideo: {},
      formattedPlaylist: []
    }
  },
  watch: {
    playlist() {
      if (this.playlist) {
        this.formattedPlaylist = this.playlist.map(video => ({ ...video, id: video.resourceId.videoId }))
        this.currentVideo = this.formattedPlaylist[0]
      }
    }
  },
  // mounted() {
  //   this.currentVideo = this.formattedPlaylist[0]
  //   debugger
  // },
  methods: {
    getYoutubeId
  }
}
</script>

<style lang="scss" scoped>

</style>
