<template>
  <footer class="py-4 bottom-0 bg-aqua w-full flex-shrink-0 mt-auto">
    <div class="flex flex-wrap max-w-6xl mx-auto justify-center">
      <div class="flex flex-wrap text-white justify-between w-full text-3xl uppercase">
        <div class="flex flex-col w-full md:w-auto px-4 italic mb-8 md:mb-0">
          <nuxt-link class="mb-2 block self-start" to="/join">Únete</nuxt-link>
          <nuxt-link class="mb-2 block self-start" to="/workshops">Talleres</nuxt-link>
          <nuxt-link class="mb-2 block self-start" to="/contact">Contacto</nuxt-link>
          <nuxt-link class="block self-start" to="/about-us">Sobre Nosotros</nuxt-link>
        </div>
        <div class="flex w-full md:w-auto items-end justify-center md:justify-end px-4">
          <a href="//literacypartners.org" target="_blank"
          class="block">
            <img class="h-20 w-auto px-2" src="/images/lp-logo.svg">
          </a>
          <a href="//univision.com" target="_blank"
          class="block">
            <p class="text-xs text-dark-gray text-center font-bold mb-1">
              "La Fuerza de Creer"<br>
              Visita en:
            </p>
            <img class="h-20 w-auto block px-2 mx-auto" src="/images/univision-logo.svg">
          </a>
        </div>
        <div class="flex flex-wrap justify-center w-full text-sm text-white pt-6">
          <nuxt-link class="px-2 inline-block" to="/privacy">PRIVACY POLICY</nuxt-link>
          <nuxt-link class="px-2 inline-block" to="/disclaimer">DISCLAIMER</nuxt-link>
          <span class="inline-block px-2 uppercase">
            © 2020. All rights reserved.
          </span>
        </div>
      </div>
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
