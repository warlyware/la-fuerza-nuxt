<template>
  <div class="flex">
    <button v-popover:share-menu
    class="text-lg border border-blue text-blue rounded px-2 font-MissionGothic hover:bg-blue hover:text-white self-center">
      Share
    </button>
    <popover ref="popoverRef" name="share-menu">
      <ShareNetwork network="facebook" :url="url"
      title="La Fuerza de Familia."
      description="This is the description of the item being shared."
      quote="A quote from them item being shared."
      hashtags="literacy,literacypartners">
        <span class="cursor-pointer" @click="closePopover">
          Share on Facebook
        </span>
      </ShareNetwork>
    </popover>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      required: true,
      type: String
    }
  },
  methods: {
    closePopover() {
      console.log('close')
      this.$refs.popoverRef.visible = false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
