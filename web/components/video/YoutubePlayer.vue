<template>
  <div class="mx-8">
    <div class="flex flex-wrap items-center player-container">
      <div class="flex items-center w-full md:w-2/3 my-1/2">
        <youtube v-if="currentVideo" player-width="100%" player-height="100%"
        class="video-responsive flex-grow"
        :video-id="currentVideo.id"
        @ready="playerReady"
        @ended="videoEnded" />
      </div>

      <YoutubePlaylist v-if="$vssWidth >= 768 "
      class="hidden md:block w-1/3 playlist-wrapper"
      :current-index="currentIndex"
      :playlist="playlist"
      @set-current-index="(i) => setCurrentIndex(i)" />
    </div>
    <YoutubePlaylist v-if="$vssWidth < 768"
    class="w-full md:hidden h-64 overflow-y-auto"
    :current-index="currentIndex"
    :playlist="playlist"
    @set-current-index="(i) => setCurrentIndex(i)" />

    <div class="w-full py-4 break-words whitespace-pre-wrap">{{currentVideo.description}}</div>
  </div>
</template>

<script>
import VueScreenSize from 'vue-screen-size'
import YoutubePlaylist from '~/components/video/YoutubePlaylist'
import getYoutubeId from 'get-youtube-id'

export default {
  components: {
    YoutubePlaylist
  },
  mixins: [VueScreenSize.VueScreenSizeMixin],
  props: {
    rawPlaylist: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
      ytPlayer: null,
      currentIndex: 0
    }
  },
  computed: {
    playlist() { return this.rawPlaylist.map(video => ({ ...video, id: video.resourceId.videoId })) },
    currentVideo() { return this.playlist[this.currentIndex]}
  },
  methods: {
    playerReady({ target }) {
      this.ytPlayer = target
    },
    videoEnded() {
      this.currentIndex += 1
      this.$nextTick(() => this.ytPlayer.playVideo())
    },
    getYoutubeId,
    setCurrentIndex(i) {
      this.currentIndex = i
      this.$nextTick(() => this.ytPlayer.playVideo())
    }
  }
}
</script>

<style lang="scss">
.player-container {
  margin: 0 auto;
  position: relative;
}
.playlist-wrapper {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  overflow-y: scroll;
}
.video-responsive{
  margin-top: -2px;
  margin-bottom: -2px;
  position: relative;
  padding-bottom: calc(var(--aspect-ratio, .5625) * 100%);
  height: 0;
}
.video-responsive iframe {
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
