<template>
  <div class="flex flex-col w-full h-screen justify-center items-center text-blue font-bold italic uppercase">
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{thereWasAProblem}}
    </h1>
    {{redirectingTo}}&nbsp;<nuxt-link to="/">home</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
  computed: {
    locale() { return this.$i18n.locale },
    pageNotFound() { return this.locale === 'en' ? 'Page not found' : 'Página no encontrada' },
    thereWasAProblem() { return this.locale === 'en' ? 'There was a problem' : 'Página no encontrada' },
    redirectingTo() { return this.locale === 'en' ? 'Redirecting to' : 'Volviendo a incio' },
  },
  mounted() {
    setTimeout(() => {
      this.$router.push('/')
    }, 3000)
  },
}
</script>
