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

<style scoped>
@import '../styles/custom-media.css';
@import '../styles/custom-properties.css';

.container {
  padding: 1.5rem 0;
  box-sizing: border-box;
  min-height: calc(100% - 72px - 216px);
}

.header {
  padding: 0 1.5rem;
  text-align: center;
}

.title + p + .dates {
  margin-bottom: 0;
  font-weight: 600;
}

.title + p + .dates + .venue {
  font-size: var(--font-small-size);
  line-height: var(--font-small-line-height);
  margin-bottom: 5rem;
}

figure {
  margin: 0 0 3em;
}

figcaption {
  font-size: var(--font-small-size);
  line-height: var(--font-small-line-height);
  padding: 0.25rem 1.5rem;
}

.mainImage {
  width: 100%;
  vertical-align: top;
}

.sessionListTitle {
  text-align: center;
  font-weight: 600;
  font-size: var(--font-title2-size);
  line-height: var(--font-title2-line-height);
  margin: 0 0 3rem;

  @media (--media-min-medium) {
    font-size: var(--font-title1-size);
    line-height: var(--font-title1-line-height);
  }
}

.sessionListContainer {
  max-width: var(--width-small);
  margin: 0 auto;
  padding: 0 1.5rem;
  box-sizing: border-box;
}
</style>
