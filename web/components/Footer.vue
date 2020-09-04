<template>
  <footer class="py-4 bottom-0 bg-aqua w-full flex-shrink-0 mt-auto">
    <div class="flex flex-wrap px-4 mx-auto justify-center">
      <div class="flex flex-wrap text-white justify-between w-full text-3xl">
        <div class="flex flex-col w-full md:w-auto px-4 italic mb-8 md:mb-0 font-italic text-4xl leading-tight uppercase">
          <nuxt-link v-for="navItem in navigation" :key="navItem.internalLink"
          class="block self-start" :to="localePath(navItem.internalLink)">
            {{ navItem.text[locale] }}
          </nuxt-link>
        </div>
        <div class="flex flex-col w-full md:w-auto items-end justify-center md:justify-between px-4">
          <div class="flex justify-center md:justify-end w-full mb-8">
            <a :href="sanitizeLink(socialMediaLinks.facebookUrl)" target="_blank" class="hover:shadow-lg rounded-full">
              <img src="/images/facebook-logo.svg" class="h-10 w-10 mx-1">
            </a>
            <a :href="sanitizeLink(socialMediaLinks.instagramUrl)" target="_blank" class="hover:shadow-lg rounded-full">
              <img src="/images/instagram-logo.svg" class="h-10 w-10 mx-1">
            </a>
            <a :href="sanitizeLink(socialMediaLinks.twitterUrl)" target="_blank" class="hover:shadow-lg rounded-full">
              <img src="/images/twitter-logo.svg" class="h-10 w-10 mx-1">
            </a>
            <a :href="sanitizeLink(socialMediaLinks.youtubeUrl)" target="_blank" class="hover:shadow-lg rounded-full">
              <img src="/images/youtube-logo.svg" class="h-10 w-10 mx-1">
            </a>
          </div>
          <div class="flex justify-center md:justify-end items-end w-full">
            <a href="//literacypartners.org" target="_blank"
            class="block">
              <img class="h-12 md:h-16 w-auto px-2" src="/images/lp-logo.svg">
            </a>
            <a href="//toosmall.org" target="_blank"
            class="block">
              <img class="h-12 md:h-16 w-auto px-2" src="/images/too-small-logo.png">
            </a>
            <a href="//univision.com" target="_blank" class="block">
              <p class="text-xs text-gray-dark text-center mb-1 italic">
                "La Fuerza de Creer"<br>
                {{ locale === 'es' ? 'Vista en:' : 'As seen on:' }}
              </p>
              <img class="h-12 md:h-16 w-auto block px-2 mx-auto" src="/images/univision-logo.svg">
            </a>
          </div>
        </div>
        <div class="flex flex-wrap justify-center w-full text-sm text-white pt-6 italic">
          <nuxt-link class="px-2 inline-block" :to="localePath('/privacy')">PRIVACY POLICY</nuxt-link>
          <nuxt-link class="px-2 inline-block" :to="localePath('/disclaimer')">DISCLAIMER</nuxt-link>
          <span class="inline-block px-2 uppercase">
            © 2020. All rights reserved.
          </span>
          <span v-if="$route.name === 'join'"
          class="w-full inline-block px-2 uppercase text-center mt-2 text-xs">
            Some icons made by <a href="https://www.freepik.com/" target="_blank">freepik</a>.
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import sanitizeLink from '~/lib/sanitizeLink'

export default {
  props: {
    navigation: {
      type: Array,
      required: true
    },
    socialMediaLinks: {
      type: Object,
      required: true
    }
  },
  computed: {
    locale() { return this.$i18n.locale },
    menu() {
      return this.navigation.map(link => {
        console.log({ link })
        return {
          href: link.internalLink,
          title: link.text[this.locale],
          hiddenOnCollapse: true
        }
      })
    },
  },
  methods: {
    sanitizeLink
  }
}
</script>
