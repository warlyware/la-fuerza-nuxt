<template>
  <header class="header">
    <nuxt-link to="/" class="home">
      <img src="images/logo.png" alt="La Fuerza logo" height="40px" />
    </nuxt-link>
    <nav>
      <nuxt-link to="/">HOME</nuxt-link>
      <a href="https://literacypartners.org/get-involved/donate" target="_blank">
        DONATE
      </a>
      <a href="https://literacypartners.org" target="_blank">
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
