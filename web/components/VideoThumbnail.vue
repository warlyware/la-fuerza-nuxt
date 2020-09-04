<template>
  <nuxt-link :to="localePath(`/videos/${video.slug.current}`)" class="h-full w-full px-4">
    <div class="bg-contain bg-center bg-no-repeat h-90 mb-4 min-h-150 max-w-sm"
    :style="`background-image: url(${getVideoImage(video.url)})`" />
    <div class="text-lg text-center">
      {{ video.name }}
    </div>
  </nuxt-link>
</template>

<script>
import getYoutubeId from 'get-youtube-id'

export default {
  props: [ 'video' ],
  methods: {
    getVideoImage(url) {
      const id = getYoutubeId(url)
      return `https://img.youtube.com/vi/${id}/hqdefault.jpg`
    }
  }
}
</script>

<style>
  .h-90 {
    height: 90%;
    max-height: 90%;
  }
  .h-20 {
    height: 20%;
    max-height: 20%;
  }
  .min-h-150 {
    min-height: 150px;
  }
</style>
