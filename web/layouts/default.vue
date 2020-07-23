<template>
  <div>
    <Navbar
      :title="$store.state.eventInformation.name"
      :ticket-link="$store.state.eventInformation.ticket"
    />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>
