<template>
  <footer class="flex max-w-4xl mx-auto justify-center p-4 py-8">
    <div class="flex">
      <nuxt-link class="px-2" to="/privacy">PRIVACY POLICY</nuxt-link>
      <nuxt-link class="px-2" to="/disclaimer">DISCLAIMER</nuxt-link>
    </div>
    <div class="px-8">
      © 2020. All rights reserved.
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'No title set'
    }
  }
}
</script>
