<template>
  <div>
    <ShareNetwork network="facebook" :url="shareMenu.url"
    title="La Fuerza de Familia."
    description="This is the description of the item being shared."
    quote="A quote from them item being shared."
    hashtags="literacy,literacypartners">
      <div class="cursor-pointer p-2 bg-blue">
        <img src="/images/facebook-logo.svg" alt="" class="h-8 w-8">
      </div>
    </ShareNetwork>
    <ShareNetwork network="twitter" :url="shareMenu.url"
    title="La Fuerza de Familia."
    description="This is the description of the item being shared."
    quote="A quote from them item being shared."
    hashtags="literacy,literacypartners">
      <div class="cursor-pointer p-2 bg-blue">
        <img src="/images/twitter-logo.svg" alt="" class="h-8 w-8">
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
  }
}
</script>

<style>
  .top-50 {
    top: 50%;
    left: 50%;
  }
</style>
