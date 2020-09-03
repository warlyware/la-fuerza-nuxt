<template>
  <fragment>
    <h2 class="font-bold italic uppercase text-4xl text-center -mb-4">
      {{title}}
    </h2>
    <ul class="flex flex-wrap justify-center max-w-3xl m-auto px-4">
      <li v-for="ally in allies" :key="ally._id"
      class="flex w-1/2 md:w-1/6">
        <div class="list-content items-center">
          <div :style="`background-image: url(${ getImageUrl(ally.image) })`"
          class="bg-contain bg-no-repeat bg-center w-full h-32" />
        </div>
      </li>
    </ul>
  </fragment>
</template>

<script>
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '~/sanityClient'
const builder = imageUrlBuilder(sanityClient)

export default {
  props: {
    title: {
      required: true,
      type: String
    },
    allies: {
      required: true,
      type: Array
    }
  },
  methods: {
    getImageUrl(image) {
      return builder.image(image).url()
    },
  }
}
</script>

<style>
  .list-content {
    display: flex;
    flex-direction: column;
    padding: 1em;
    width: 100%;
  }
  .list-content div {
    flex: 1 0 auto;
  }
</style>
