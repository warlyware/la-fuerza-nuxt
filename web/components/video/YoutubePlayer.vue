<template>
  <div class="flex flex-wrap max-w-video-player m-auto items-center">
    <div class="flex items-center w-full md:w-3/4">
      <youtube v-if="currentVideo" player-width="100%" player-height="100%"
      class="video-responsive flex-grow"
      :video-id="currentVideo.id" />
    </div>

    <div class="w-full md:w-1/4 overflow-scroll h-64">
      <div class="inner-container">
        <YoutubePlaylist :playlist="playlist" />
      </div>
    </div>

    {{currentVideo.description}}
  </div>
</template>

<script>
import YoutubePlaylist from '~/components/video/YoutubePlaylist'
import getYoutubeId from 'get-youtube-id'

export default {
  components: {
    YoutubePlaylist
  },
  props: {
    rawPlaylist: {
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
  computed: {
    playlist() { return this.rawPlaylist.map(video => ({ ...video, id: video.resourceId.videoId })) }
  },
  mounted() {
    this.currentVideo = this.playlist[0]
  },
  methods: {
    getYoutubeId
  }
}
</script>

<style lang="scss">
.max-w-video-player {
  max-width: 1200px;
}
.inner-container {
  width: 100%;
  /*for testing purpose*/
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  // box-sizing: border-box; /* NEW */
}
.max-h-500 {
  max-height: 500px;
}
.video-responsive{
  position: relative;
  padding-bottom: calc(var(--aspect-ratio, .5625) * 100%);
  height: 0;
}
.video-responsive iframe {
  max-height: 500px;
  position: absolute;
  margin:auto;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
}
</style>
