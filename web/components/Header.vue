<template>
  <header class="top-0 p-4 fixed w-screen bg-white">
    <div class="flex justify-center max-w-5xl mx-auto">
      <div class="flex-col w-full justify-center">
        <div class="flex w-full justify-between items-end h-half border-l-4 border-pink">
          <button class="bg-aqua rounded-full self-center p-4 py-0 ml-1 mb-2 md:w-32 text-sm md:text-2xl font-MissionGothicBlackItalic text-white font-bold"
          @click="toggleLanguage">
            <span v-if="language === 'es'" class="text-pink-shadow">
              ENGLISH
            </span>
            <span v-if="language === 'en'" class="text-pink-shadow">
              SPANISH
            </span>
          </button>
          <img src="/images/la-fuerza-logo-top.png" class="h-6 md:h-8 -ml-16 md:-ml-24 mb-1 cursor-pointer"
          @click="$router.push('/')" />
          <button class="self-center text-lg md:text-3xl text-blue mb-2 font-bold font-MissionGothicBlack"
          @click="toggleNav">
            MENÚ
          </button>
        </div>
        <div class="bg-pink h-1 w-full"></div>
        <div class="flex w-full justify-center h-half border-r-4 border-pink">
          <img src="/images/la-fuerza-logo-bottom.png" class="h-4 md:h-6 -mr-16 mt-1 cursor-pointer" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
  computed: {
    language() { return this.$i18n.locale }
  },
  methods: {
    toggleNav() {
      this.$store.commit('toggleNav')
    },
    toggleLanguage() {
      this.$i18n.setLocale(this.language === 'en' ? 'es' : 'en')
    }
  },
  mounted() {
    console.log('$i18n', this.$i18n.locale)
  }
}
</script>

<style scoped>
  .h-half {
    height: 50%
  }
  .text-pink-shadow {
    text-shadow: 2px 2px #ea3cad;
  }
</style>
