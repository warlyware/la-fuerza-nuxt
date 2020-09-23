<template>
  <button class="self-center text-lg md:text-3xl text-blue mb-2 font-bold"
  @click="toggleNav">
    <span v-if="locale === 'es'">
      MENÚ
    </span>
    <span v-if="locale === 'en'">
      MENU
    </span>
  </button>
</template>

<script>

export default {
  computed: {
    locale() { return this.$i18n.locale }
  },
  methods: {
    toggleNav() {
      this.$store.commit('toggleNav')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
