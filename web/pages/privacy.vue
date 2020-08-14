<template>
  <section class="max-w-5xl mx-auto">
    <BlockContent v-if="body" :blocks="body" />
  </section>
</template>

<script>
import sanityClient from '~/sanityClient'
import BlockContent from 'sanity-blocks-vue-component'

const query = `
  *[_id == "privacyPolicy"][0] {
    body[] {
      ...,
      children[] {
        ...
      }
    }
  }
`
export default {
  components: {
    BlockContent
  },
  async asyncData() {
    return await sanityClient.fetch(query)
  }
}
</script>

<style scoped>
.title {
  margin-bottom: 0.5em;
}

.container {
  max-width: 40rem;
  padding: 0 1rem;
  margin: 0 auto;
  margin-bottom: 2rem;
}
</style>
