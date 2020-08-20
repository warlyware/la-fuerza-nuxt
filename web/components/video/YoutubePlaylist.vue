<template>
  <div>
    {{playlist}}
  </div>
</template>

<script>
export default {
  props: {
    playlist: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
