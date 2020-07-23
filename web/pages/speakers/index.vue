<template>
  <section class="container">
    <h1 class="title">Speakers</h1>
    <ul class="speakers">
      <li v-for="speaker in speakers" :key="speaker._id" class="speaker">
        <nuxt-link :to="{ path: `/speakers/${speaker.slug.current}` }">
          <SanityImage
            :width="256"
            :height="256"
            :image="speaker.image"
            class="avatar"
          />
          <h2 class="name">{{ speaker.name || 'Secret speaker' }}</h2>
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
import groq from 'groq'
import sanityClient from '~/sanityClient'
import SanityImage from '~/components/SanityImage'

const query = groq`
  {
    "speakers": *[_type == "person"]
  }
`

export default {
  components: {
    SanityImage
  },
  async asyncData() {
    return await sanityClient.fetch(query)
  }
}
</script>
