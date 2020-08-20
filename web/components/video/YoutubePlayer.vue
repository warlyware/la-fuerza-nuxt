<template>
<div class="max-w-video-player m-auto">
  <div class="flex flex-wrap items-center player-container">
    <div class="flex items-center w-full md:w-3/4">
      <youtube v-if="currentVideo" player-width="100%" player-height="100%"
      class="video-responsive flex-grow"
      :video-id="currentVideo.id" />
    </div>

    <YoutubePlaylist class="hidden md:block w-1/4 playlist-wrapper" :playlist="playlist" />
  </div>
  <YoutubePlaylist class="w-full md:hidden h-64 overflow-y-auto" :playlist="playlist" />
  <div class="w-full py-4">
    {{currentVideo.description}}
  </div>
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
.player-container {
  // width: 500px;
  border: 3px solid red;
  margin: 0 auto;
  position: relative;
}
.playlist-wrapper {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  background-color: yellow;
  overflow-y: scroll;
}
.max-w-video-player {
  max-width: 1200px;
}
.video-responsive{
  margin-top: -2px;
  margin-bottom: -2px;
  position: relative;
  // padding-bottom: 56%;
  padding-bottom: calc(var(--aspect-ratio, .5625) * 100%);
  height: 0;
}
.video-responsive iframe {
  max-height: 500px;
  position: absolute;
  margin:auto;
  top: 0;
  bottom:0;
  right:0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
}
</style>
