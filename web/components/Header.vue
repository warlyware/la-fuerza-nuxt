<template>
  <header class="flex justify-center max-w-4xl mx-auto p-4">
    <div class="flex-col w-full justify-center">
      <div class="flex w-full justify-between h-half border-l-4 border-pink">
        <button class="self-center p-2 bg-aqua rounded ml-1 mb-2 text-white font-bold w-24"
        @click="toggleLanguage">
          <span v-if="language === 'SPANISH'">
            ENGLISH
          </span>
          <span v-if="language === 'ENGLISH'">
            SPANISH
          </span>
        </button>
        <img src="/images/la-fuerza-logo-top.png" class="h-8 -ml-16 mb-1" />
        <button class="self-center text-3xl text-blue mb-2 font-bold">
          MENÚ
        </button>
      </div>
      <div class="bg-pink h-1 w-full"></div>
      <div class="flex w-full justify-center h-half border-r-4 border-pink">
        <img src="/images/la-fuerza-logo-bottom.png" class="h-6 -mr-16 mt-1" />
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
    }
  }
}
</script>

<style scoped>
  .h-half {
    height: 50%
  }
</style>
