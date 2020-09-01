<template>
  <div class="w-full p-6 flex flex-wrap bg-blue text-aqua">
    <h2 class="w-full text-center text-aqua font-bold italic text-4xl uppercase mb-0">
      {{newsletterInfo.title[locale]}}
    </h2>
    <p class="m-auto max-w-lg text-center leading-5 mb-8 font-bold text-lg tracking-wide">
      <BlockContent :blocks="newsletterInfo[`${locale}Text`]" />
    </p>
    <div class="w-full flex justify-center mb-2">
      <CustomButton :button="newsletterInfo.button"
      class="bg-pink rounded-lg p-2 py-1 text-2xl uppercase font-bold italic tracking-wide text-white" />
    </div>
  </div>
</template>

<script>
import BlockContent from 'sanity-blocks-vue-component'
import CustomButton from '~/components/blocks/CustomButton'

export default {
  components: {
    BlockContent,
    CustomButton
  },
  props: {
    newsletterInfo: {
      required: true,
      type: Object
    }
  },
  computed: {
    locale() { return this.$i18n.locale },
    secondaryContacts() { return this.contacts.slice(2, this.contacts.length) }
  },
  mounted() {
    console.log(this)
  }
}
</script>
