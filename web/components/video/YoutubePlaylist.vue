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
  },
  mounted() {
    console.log(this.playlist)
  }
}
</script>

<style lang="scss" scoped>

</style>
