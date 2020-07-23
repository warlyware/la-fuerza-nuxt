<template>
  <section class="container">
    <div v-for="video in videos" :key="video.name">
      {{ video }}
    </div>
    <!-- <header class="header">
      <h1 class="title">{{ info.name }}</h1>
      <p class="subtitle">{{ info.description }}</p>
      <div class="dates">
        {{ new Date(info.schedule.from) | dateFilter('DD MMMM ha') }}
        &ndash;
        {{ new Date(info.schedule.to) | dateFilter('ha') }}
      </div>
      <div class="venue">{{ info.venue.name }}, {{ info.venue.city }}</div>
    </header> -->

    <!-- <figure :v-if="info.image">
      <SanityImage
        :image="info.image"
        :width="1800"
        :height="500"
        class="mainImage"
      />
      <figcaption>{{ info.image.caption }}</figcaption>
    </figure> -->

    <!-- <div class="sessionListContainer">
      <h2 class="sessionListTitle">Schedule</h2>
      <SessionList :program="program" :info="info" />
    </div> -->
  </section>
</template>

<script>
import groq from 'groq'
import sanityClient from '~/sanityClient'
// import SanityImage from '~/components/SanityImage'

const query = groq`
  {
    "videos": *[_type == "video"]
  }
`

export default {
  components: {
    // SanityImage
  },
  async asyncData() {
    return await sanityClient.fetch(query)
  }
}
</script>
