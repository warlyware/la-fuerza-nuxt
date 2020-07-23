<template>
  <section class="max-w-4xl mx-auto">
    <BlockContent v-if="body" :blocks="body" :serializers="serializers" />
  </section>
</template>

<script>
import sanityClient from '~/sanityClient'
import EventBlock from '~/components/blockContent/EventBlock'
import PersonBlock from '~/components/blockContent/PersonBlock'
import BlockContent from 'sanity-blocks-vue-component'

const query = `
  *[_id == "disclaimer"][0] {
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
  data() {
    return {
      serializers: {
        types: {
          eventReference: EventBlock,
          personReference: PersonBlock
        }
      }
    }
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
