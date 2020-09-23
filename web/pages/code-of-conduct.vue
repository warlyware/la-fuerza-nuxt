<template>
  <section class="container">
    <h1 class="title text-blue font-bold italic uppercase">Code of conduct</h1>
    <BlockContent v-if="body" :blocks="body" />
  </section>
</template>

<script>
import sanityClient from '~/sanityClient'
import BlockContent from 'sanity-blocks-vue-component'

const query = `
  *[_id == "codeOfConduct"][0] {
    body[] {
      ...,
      children[] {
        ...,
        event->,
        person->
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
