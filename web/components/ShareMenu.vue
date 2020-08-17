<template>
  <div class="flex">
    <button class="text-lg border border-blue text-blue rounded px-2 font-MissionGothic hover:bg-blue hover:text-white self-center"
    v-popover:myname>
      Share
    </button>
    <popover ref="popoverRef" name="myname">
      <ShareNetwork network="facebook" :url="url"
      title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
      description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
      quote="The hot reload is so fast it\'s near instant. - Evan You"
      hashtags="vuejs,vite">
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
