<template>
  <header class="flex max-w-4xl mx-auto justify-between p-4">
    <nuxt-link to="/" class="items-start">
      <img src="images/logo.png" alt="La Fuerza logo" width="200px" />
    </nuxt-link>
    <nav class="text-lg flex items-center">
      <nuxt-link class="px-4" to="/">HOME</nuxt-link>
      <a href="https://literacypartners.org/get-involved/donate"
      target="_blank"
      class="px-4">
        DONATE
      </a>
      <a href="https://literacypartners.org" target="_blank"
      class="px-4">
        LITERACY PARTNERS
      </a>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'No title set'
    },
    ticketLink: {
      type: String,
      default: undefined
    }
  }
}
</script>
