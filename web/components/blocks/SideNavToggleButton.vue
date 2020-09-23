<template>
  <button class="self-center text-sm md:text-3xl text-blue font-bold"
  @click="toggleNav">
    <div class="hidden md:block">
      <span v-if="locale === 'es'">
        MENÚ
      </span>
      <span v-if="locale === 'en'">
        MENU
      </span>
    </div>
    <div class="md:hidden mb-1">
      <div class="hamburger-line" />
      <div class="hamburger-line" />
      <div class="hamburger-line" />
    </div>
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

<style scoped>
  .hamburger-line {
    width: 20px;
    height: 3px;
    background-color: #19105e;
    margin: 2px 0;
  }
</style>
