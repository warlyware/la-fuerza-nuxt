<template>
  <ul v-if="persons" class="persons">
    <li v-for="personRef in persons" :key="personRef.person._id" class="person">
      <nuxt-link :to="{ path: `/speakers/${personRef.person.slug.current}` }">
        <SanityImage
          :image="personRef.person.image"
          :alt="personRef.person.image.alt"
          :width="128"
          :height="128"
          fit="crop"
          class="personImage"
        />
        {{ personRef.person.name }}
      </nuxt-link>
    </li>
  </ul>
</template>
<script>
import SanityImage from '~/components/SanityImage'

export default {
  components: {
    SanityImage
  },
  props: {
    persons: {
      type: Array,
      default: () => []
    }
  }
}
</script>
