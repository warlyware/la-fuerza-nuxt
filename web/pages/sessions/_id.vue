<template>
  <section class="container">
    <SanityImage v-if="image" :image="image" />
    <div class="content">
      <p class="sessionType">{{ sessionType }}</p>
      <h1 class="sessionTitle">{{ title }}</h1>
      <p class="summary">{{ summary }}</p>
      <div class="sessionContent">
        <BlockContent
          :blocks="description"
          :v-if="description"
          :serializers="serializers"
        />
      </div>
    </div>
  </section>
</template>

<script>
import BlockContent from 'sanity-blocks-vue-component'
import groq from 'groq'
import sanityClient from '~/sanityClient'
import SanityImage from '~/components/SanityImage'
import PersonBlock from '~/components/blockContent/PersonBlock'

const query = groq`
  *[_type == "session" && _id == $id] {
    ...,
    persons[] {
      person-> {
        ...,
        image {
          ...,
          asset->
        }
      }
    }
  }[0]
`

export default {
  components: {
    BlockContent,
    SanityImage
  },
  data() {
    return {
      serializers: {
        types: {
          personReference: PersonBlock
        }
      }
    }
  },
  async asyncData({ params }) {
    return await sanityClient.fetch(query, params)
  }
}
</script>
