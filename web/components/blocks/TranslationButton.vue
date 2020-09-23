<template>
  <button class="bg-aqua rounded-full self-center p-2 py-0 ml-1 md:mb-2 md:w-32 text-sm md:text-2xl font-bold italic"
  @click="toggleLanguage">
    <span v-if="locale === 'es'" class="text-shadow-pink text-white">
      ENGLISH
    </span>
    <span v-if="locale === 'en'" class="text-shadow-pink text-white">
      ESPAÑOL
    </span>
  </button>
</template>

<script>
export default {
  computed: {
    locale() { return this.$i18n.locale }
  },
  methods: {
    toggleLanguage() {
      this.$i18n.setLocale(this.locale === 'en' ? 'es' : 'en')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
