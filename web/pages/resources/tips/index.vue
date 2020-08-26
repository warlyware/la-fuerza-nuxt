/* eslint-disable vue/no-parsing-error */
<template>
  <div class="pt-8 w-full">
    <h1 class="font-MissionGothicBlack text-6xl uppercase text-center">
      Consejos
    </h1>
    <div class="w-full border border-blue flex items-center mb-16">
      <div class="w-1/4">
        <span class="text-6xl px-4 cursor-pointer" @click="prevImage">
          &lt;
        </span>
      </div>
      <div class="w-1/2 h-image-carousel relative">
        <img class="h-full mx-auto" :src="images[currentImageIndex].src" alt="">
      </div>
      <div class="flex justify-end w-1/4 cursor-pointer">
        <span class="text-6xl px-4" @click="nextImage">
          >
        </span>
      </div>
    </div>
    <LightBox ref="lightbox"
    :media="images" :show-caption="true"
    :show-light-box="false" />
    <div class="flex flex-wrap w-full max-w-5xl m-auto px-4">
      <div v-for="(image, i) in images" :key="image.caption"
      class="p-2 w-1/2 md:w-1/4 lg:w-1/6 cursor-pointer relative"
      @click="showImage(i)">
        <img :src="image.thumb" width="100%" height="100%">
      </div>
    </div>
  </div>
</template>

<script>
import LightBox from 'vue-image-lightbox'
import randomColor from 'randomcolor'

export default {
  components: { LightBox },
  data() {
    return {
      showLightBox: false,
      currentImageIndex: 0
    }
  },
  computed: {
    images() { return Array(66).fill({}).map((_, i) => {
      const color = randomColor().slice(1, 7)
      return {
        thumb: `//placehold.it/150/${color}`,
        src: `//placehold.it/800x600/${color}`,
        caption: `${i + 1} - caption to display.`
      }
    })}
  },
  methods: {
    showImage(i) {
      this.$refs.lightbox.showImage(i)
      this.currentImageIndex = i
      this.showLightBox = true
    },
    nextImage() {
      this.currentImageIndex === this.images.length - 1
        ? this.currentImageIndex = 0
        : this.currentImageIndex += 1
    },
    prevImage() {
      this.currentImageIndex === 0
        ? this.currentImageIndex = this.images.length - 1
        : this.currentImageIndex -= 1
    }
  }
}
</script>

<style lang="scss" scoped>
  .h-image-carousel {
    height: 350px;
  }
</style>
