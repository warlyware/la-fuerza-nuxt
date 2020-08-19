<template>
  <section class="pt-8 max-w-5xl mx-auto">
    <h1 class="text-5xl text-center italic">
      {{ $t('videos.title') }}
    </h1>

    <h2>
      {{ name }}
    </h2>
    {{ playlist }}
  </section>


</template>

<script>
  export default {
    data() {
      return {
        name: '',
        playlist: []
      }
    },
    async mounted() {
      const { data } = await this.$axios.get('/api/youtube/playlist?id=PLAXKIS0jXy64fre2EuL12XU7rBHJH16oN')
      this.playlist = data.data.playlist
      this.name = data.data.name
      console.log(data)
    }
  }
</script>
