<template>
  <div class="flex flex-col h-full">
    <Header />
    <Sidebar />
    <nuxt class="pt-24 md:pt-32 mb-8 content px-4 md:px-0" />
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
