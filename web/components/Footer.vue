<template>
  <footer class="py-4 bottom-0 bg-aqua w-full flex-shrink-0 mt-auto">
    <div class="flex flex-wrap px-4 mx-auto justify-center">
      <div class="flex flex-wrap text-white justify-between w-full text-3xl">

        <!-- <div class="flex justify-around w-full px-4 italic mb-8 font-italic text-4xl leading-tight uppercase">
          <nuxt-link v-for="navItem in navigation" :key="navItem.internalLink"
          class="block self-start" :to="localePath(navItem.internalLink)">
            {{ navItem.text[locale] }}
          </nuxt-link>
        </div> -->
        <div class="w-full">
          <div class="px-4 flex flex-wrap w-full mb-4">
            <div class="flex justify-center w-full text-white font-bold tracking-wide italic -mb-2">
              <h2>{{ sponsorsBlockTitle[locale] }}</h2>
            </div>
            <div class="flex flex-wrap justify-center lg:justify-between m-auto w-full">
              <div class="flex justify-center w-full lg:w-1/3 my-4 opacity-75">
                <a href="//literacypartners.org/" target="_blank">
                  <img class="h-16 md:h-20 w-auto" src="/images/lp-logo-white.png">
                </a>
              </div>
              <div class="flex justify-center w-full lg:w-1/3 my-4 opacity-75">
                <a href="//corporate.univision.com/our-company/csr/" target="_blank">
                  <img class="h-16 md:h-20 w-auto" src="/images/univision-logo-white.png">
                </a>
              </div>
              <div class="flex justify-center w-full lg:w-1/3 my-4 opacity-75">
                <a href="//toosmall.org/en-espanol" target="_blank">
                  <img class="h-16 md:h-20 w-auto" src="/images/too-small-logo-white.png">
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="flex w-full justify-center px-4">
          <div class="flex justify-center w-full mb-8">
            <a :href="sanitizeLink(socialMediaLinks.instagramUrl)" target="_blank" class="hover:shadow-lg rounded-full">
              <img src="/images/instagram-logo.svg" class="h-10 w-10 mx-1">
            </a>
            <a :href="sanitizeLink(socialMediaLinks.facebookUrl)" target="_blank" class="hover:shadow-lg rounded-full">
              <img src="/images/facebook-logo.svg" class="h-10 w-10 mx-1">
            </a>
            <a :href="sanitizeLink(socialMediaLinks.twitterUrl)" target="_blank" class="hover:shadow-lg rounded-full">
              <img src="/images/twitter-logo.svg" class="h-10 w-10 mx-1">
            </a>
            <a :href="sanitizeLink(socialMediaLinks.youtubeUrl)" target="_blank" class="hover:shadow-lg rounded-full">
              <img src="/images/youtube-logo.svg" class="h-10 w-10 mx-1">
            </a>
          </div>
        </div>

        <div class="flex flex-wrap justify-center w-full text-sm text-white italic">
          <nuxt-link class="px-2 inline-block" :to="localePath('/privacy')">PRIVACY POLICY</nuxt-link>
          <!-- <nuxt-link class="px-2 inline-block" :to="localePath('/disclaimer')">DISCLAIMER</nuxt-link> -->
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
    },
    sponsorsBlockTitle: {
      type: Object,
      required: true
    }
  },
  computed: {
    locale() { return this.$i18n.locale },
    menu() {
      return this.navigation.map(link => {
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
