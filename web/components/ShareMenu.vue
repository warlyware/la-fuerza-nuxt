<template>
  <div class="flex items-center rounded-lg">
    <ShareNetwork network="facebook" :url="`${baseUrl}${this.$route.fullPath}`"
    :title="title"
    :description="description"
    :quote="quote"
    :hashtags="hashtags">
      <div class="cursor-pointer p-2 bg-blue rounded-full mx-1">
        <img src="/images/facebook-logo.svg" alt="" class="h-8 w-8">
      </div>
    </ShareNetwork>
    <!-- <ShareNetwork network="linkedin" :url="`${baseUrl}${this.$route.fullPath}`"
    :title="title"
    :description="description"
    :quote="quote"
    :hashtags="hashtags">
      <div class="cursor-pointer p-2 bg-blue rounded-full mx-1">
        <img src="/images/linked-in-logo.svg" alt="" class="h-8 w-8 bg-white rounded-full">
      </div>
    </ShareNetwork> -->
    <ShareNetwork network="twitter" :url="`${baseUrl}${this.$route.fullPath}`"
    :title="title"
    :description="description"
    :quote="quote"
    :hashtags="hashtags">
      <div class="cursor-pointer p-2 bg-blue rounded-full mx-1">
        <img src="/images/twitter-logo.svg" alt="" class="h-8 w-8">
      </div>
    </ShareNetwork>
    <ShareNetwork network="whatsapp" :url="`${baseUrl}${this.$route.fullPath}`"
    :title="title"
    :description="description"
    :quote="quote"
    :hashtags="hashtags">
      <div class="cursor-pointer p-2 bg-blue rounded-full mx-1">
        <img src="/images/whatsapp-logo-bw.svg" alt="" class="h-8 w-8">
      </div>
    </ShareNetwork>
  </div>
</template>

<script>

export default {
  props: {
    shareMenu: {
      required: true,
      type: Object
    }
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
    }
  },
}
</script>

<style>
  .top-50 {
    top: 50%;
    left: 50%;
  }
</style>
