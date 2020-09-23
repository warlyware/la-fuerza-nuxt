<template>
  <header class="top-0 p-4 fixed w-screen bg-white z-10">
    <div class="flex justify-center mx-auto">
      <div class="w-full justify-center">
        <div class="flex w-full justify-between items-end h-half border-l-4 border-pink">
          <TranslationButton />
          <img src="/images/la-fuerza-logo-top.png" class="h-4 md:h-8 -ml-8 md:-ml-24 mb-1 cursor-pointer"
          @click="$router.push(localeRoute('/'))" />
          <SideNavToggleButton />
        </div>
        <div class="bg-pink h-1 w-full"></div>
        <div class="flex w-full justify-center h-half border-r-4 border-pink">
          <img src="/images/la-fuerza-logo-bottom.png" class="h-3 md:h-6 -mr-16 mt-1 cursor-pointer"
          @click="$router.push(localeRoute('/'))" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>

import SideNavToggleButton from '~/components/blocks/SideNavToggleButton'
import TranslationButton from '~/components/blocks/TranslationButton'

export default {
  components: {
    SideNavToggleButton,
    TranslationButton
  },
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
  .h-half {
    height: 50%
  }
</style>
