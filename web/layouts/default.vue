<template>
  <div>
    <Header />
    <Sidebar />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Sidebar from '~/components/navigation/Sidebar.vue'

export default {
  components: {
    Header,
    Footer,
    Sidebar
  }
}
</script>
