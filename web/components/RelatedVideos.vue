<template>
  <fragment>
    <h2 class="text-center uppercase font-bold mb-2">
      {{ $t('header.related-videos') }}
    </h2>
    <div v-if="relatedVideos.length"
    class="flex flex-wrap justify-start ">
      <VideoThumbnail v-for="video in relatedVideos"
      :key="video.url" :video="video"
      class="px-4 cursor-pointer md:w-1/3" />
    </div>
  </fragment>

</template>

<script>
import VideoThumbnail from '~/components/VideoThumbnail'

export default {
  components: {
    VideoThumbnail
  },
  props: {
    relatedVideos: {
      required: true,
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
