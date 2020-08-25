<template>
  <div class="h-64 bg-blue w-full">
    <div :class="`flex h-full w-full justify-${xAxisLocation} items-end`">
      <div class="text-white text-5xl uppercase italic px-8 font-MissionGothicBlackItalic">
        {{ title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
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
