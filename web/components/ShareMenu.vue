<template>
  <transition name="fade">
    <div v-if="display">
      <ShareNetwork network="facebook" :url="`${baseUrl}${this.$route.fullPath}`"
      :title="title"
      :description="description"
      :quote="quote"
      :hashtags="hashtags">
        <div class="cursor-pointer p-2 bg-blue">
          <img src="/images/facebook-logo.svg" alt="" class="h-8 w-8">
        </div>
      </ShareNetwork>
      <ShareNetwork network="twitter" :url="`${baseUrl}${this.$route.fullPath}`"
      :title="title"
      :description="description"
      :quote="quote"
      :hashtags="hashtags">
        <div class="cursor-pointer p-2 bg-blue">
          <img src="/images/twitter-logo.svg" alt="" class="h-8 w-8">
        </div>
      </ShareNetwork>
      <ShareNetwork network="whatsapp" :url="`${baseUrl}${this.$route.fullPath}`"
      :title="title"
      :description="description"
      :quote="quote"
      :hashtags="hashtags">
        <div class="cursor-pointer p-2 bg-blue">
          <img src="/images/whatsapp-logo-bw.svg" alt="" class="h-8 w-8">
        </div>
      </ShareNetwork>
    </div>
  </transition>
</template>

<script>
import debounce from 'lodash.debounce'

export default {
  props: {
    shareMenu: {
      required: true,
      type: Object
    },
    scrollDistance: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      display: false
    }
  },
  mounted() {
    window.addEventListener('scroll', debounce(this.onScroll, 200, { 'maxWait': 300 }))
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },
  computed: {
    locale() { return this.$i18n.locale },
    baseUrl() { return process.env.BASE_URL },
    title() { return this.shareMenu.title ? this.shareMenu.title[this.locale] : '' },
    description() { return this.shareMenu.description ? this.shareMenu.description[this.locale] : '' },
    quote() { return this.shareMenu.quote ? this.shareMenu.quote[this.locale] : '' },
    hashtags() { return this.shareMenu[`${this.locale}Hashtags`] && this.shareMenu[`${this.locale}Hashtags`].length
      ? this.shareMenu[`${this.locale}Hashtags`].join(',')
      : ''
    },
  },
  methods: {
    onScroll() {
      if(window.scrollY > this.scrollDistance) {
        this.display = true
      } else {
        this.display = false
      }
    }
  }
}
</script>

<style>
  .top-50 {
    top: 50%;
    left: 50%;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
