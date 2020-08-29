<template>
  <div :class="wrapperClass">
    <div :class="`flex h-full w-full justify-${xAxisLocation} items-end relative`">
      <SanityImage :image="image"
      class="w-screen top-0"
      :width="1800"
      :height="1000" />
      <div class="text-white text-5xl uppercase italic px-8 font-MissionGothicBlackItalic tracking-wider absolute"
      :class="bgColor === 'aqua' ? 'text-shadow-blue-side' : ''">
        {{ title }}
      </div>
    </div>
  </div>
</template>

<script>
import SanityImage from '~/components/SanityImage'

export default {
  components: {
    SanityImage
  },
  props: {
    bgColor: {
      type: String,
      default: 'blue'
    },
    title: {
      type: String,
      default: ''
    },
    xAxisLocation: {
      type: String,
      default: 'end'
    },
    image: {
      type: Object,
      default: () => ({})
    },
    fullHeight: {
      type: Boolean
    }
  },
  computed: {
    wrapperClass() {
      let height = this.fullHeight ? 'h-64' : 'h-20'
      return `${height} bg-${this.bgColor} w-full`
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
