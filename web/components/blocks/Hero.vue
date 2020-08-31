<template>
  <div :class="wrapperClass">
    <div :class="`flex h-full w-full justify-${xAxisLocation} items-end relative`">
      <SanityImageResponsive :image="image"
      class="w-full min-w-screen top-0 flex-shrink-0 absolute h-64" />
      <div class="text-white text-5xl uppercase italic px-8 mb-3 font-MissionGothicBlackItalic tracking-wider absolute"
      :class="(bgColor === 'aqua' || bgColor === 'pink') ? 'text-shadow-blue-side' : ''">
        {{ title }}
      </div>
    </div>
  </div>
</template>

<script>
import SanityImageResponsive from '~/components/SanityImageResponsive'

export default {
  components: {
    SanityImageResponsive
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
