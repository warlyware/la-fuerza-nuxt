<template>
  <div>
    <img :src="getVideoImage(video.url)" alt="">
    <span class="text-lg">
      {{ video.name }}
    </span>
  </div>
</template>

<script>
import getYoutubeId from 'get-youtube-id'

export default {
  props: [ 'video' ],
  methods: {
    getVideoImage(url) {
      const id = getYoutubeId(url)
      debugger
      return `https://img.youtube.com/vi/${id}/hqdefault.jpg`
    }
  }
}
</script>
