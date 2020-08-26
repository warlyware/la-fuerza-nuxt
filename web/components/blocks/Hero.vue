<template>
  <div :class="`h-64 bg-${bgColor} w-full`">
    <div :class="`flex h-full w-full justify-${xAxisLocation} items-end`">
      <div class="text-white text-5xl uppercase italic px-8 font-MissionGothicBlackItalic tracking-wider"
      :class="bgColor === 'aqua' ? 'text-shadow-blue-side' : ''">
        {{ title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
