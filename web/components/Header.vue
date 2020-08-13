<template>
  <header class="top-0 p-4 fixed w-screen bg-white">
    <div class="flex justify-center max-w-4xl mx-auto">
      <div class="flex-col w-full justify-center">
        <div class="flex w-full justify-between items-end h-half border-l-4 border-pink">
          <!-- <div class="md:hidden"></div> -->
          <button class="self-center p-2 py-1 md:py-2 bg-aqua rounded ml-1 mb-2 text-white font-bold md:w-24 text-sm md:text-base"
          @click="toggleLanguage">
            <span v-if="language === 'SPANISH'">
              ENGLISH
            </span>
            <span v-if="language === 'ENGLISH'">
              SPANISH
            </span>
          </button>
          <img src="/images/la-fuerza-logo-top.png" class="h-4 md:h-8 -ml-16 mb-1" />
          <button class="self-center text-lg md:text-3xl text-blue mb-2 font-bold"
          @click="toggleNav">
            MENÚ
          </button>
        </div>
        <div class="bg-pink h-1 w-full"></div>
        <div class="flex w-full justify-center h-half border-r-4 border-pink">
          <img src="/images/la-fuerza-logo-bottom.png" class="h-4 md:h-8 -mr-16 mt-1" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      language: 'SPANISH'
    }
  },
  methods: {
    toggleLanguage() {
      this.language = this.language === 'SPANISH' ? 'ENGLISH' : 'SPANISH'
    },
    toggleNav() {
      this.$store.commit('toggleNav')
    }
  }
}
</script>

<style scoped>
  .h-half {
    height: 50%
  }
</style>
