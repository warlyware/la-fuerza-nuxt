<template>
  <div class="py-2 border border-gray">
    <template v-if="direction === 'vertical'">
      <div v-for="(video, i) in playlist" :key="video.url"
      class="px-4 mb-2 flex cursor-pointer"
      :class="i === currentIndex ? 'bg-gray' : 'bg-white'"
      @click="setCurrentIndex(i)">
        <div class="text-blue flex flex-col justify-center w-4 flex-shrink-0 text-xs">
          <span>
            {{ i + 1 }}
          </span>
        </div>
        <div class="w-32 h-20 bg-yellow flex-shrink-0">
          <div class="w-full h-full bg-cover bg-center"
          :style="`background-image: url(${video.thumbnails.high.url})`"></div>
        </div>
        <div class="ml-2 flex flex-col w-full">
          <span class="font-bold text-md line-clamp overflow-hidden w-full">
            {{ video.title }}
          </span>
          <span class="text-xs">
            {{ video.channelTitle }}
          </span>
        </div>
      </div>
    </template>

    <template v-else>
      <div v-for="video in playlist" :key="video.url" class="px-4 pb-2">
        <div class="bg-cover bg-image h-0"
        :style="`background-image: url(${video.thumbnails.high.url})`"></div>
        {{ video.title }}
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    currentIndex: {
      type: Number,
      required: true
    },
    playlist: {
      type: Array,
      required: true
    },
    direction: {
      type: String,
      default: 'vertical'
    }
  },
  methods: {
    setCurrentIndex(i) {
      this.$emit('set-current-index', i)
    }
  },
}
</script>

<style lang="scss" scoped>
.16-9 {
  padding-bottom: calc(var(--aspect-ratio, .5625) * 100%);
}
</style>
