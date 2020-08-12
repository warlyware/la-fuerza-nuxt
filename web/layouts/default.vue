<template>
  <div>
    <Header :title="$store.state.eventInformation.name"
    :ticket-link="$store.state.eventInformation.ticket" />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>
