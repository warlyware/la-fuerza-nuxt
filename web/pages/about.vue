<template>
  <div class="w-full">
    <Hero :image="hero.image" :full-height="hero.fullHeight" :title="title[locale]"
    x-axis-location="start" class="mb-8" />
    <div class="max-w-4xl mx-auto justify-between p-4 mb-4 text-blue">
      <BlockContent :blocks="aboutText" />
    </div>

    <OurAllies v-if="allies && allies.length" :title="ourAlliesTitle[locale]" :allies="allies" />

    <div class="max-w-4xl mx-auto w-full flex flex-wrap my-8">
      <SanityImageResponsive :image="image1"
      class="w-full md:w-1/3 bg-blue text-white flex justify-center items-center h-64 md:h-auto"
      :height="500"
      fit="crop" />
      <div class="w-full md:w-1/3 h-64 text-blue border border-blue flex flex-col justify-center items-center p-8 md:p-12">
        <div class="leading-tight text-center mb-2">
          <BlockContent :blocks="this[`${locale}Block1Text`]" />
        </div>
        <div>
          <CustomButton :button="block1Button"
          class="bg-aqua p-2 py-0 rounded text-white text-shadow-pink" />
        </div>
      </div>
      <SanityImageResponsive :image="image2"
      class="w-full md:w-1/3 bg-blue text-white flex justify-center items-center h-64 md:h-auto"
      :height="500"
      fit="crop" />
    </div>
  </div>
</template>

<script>
import CustomButton from '~/components/blocks/CustomButton'
import SanityImageResponsive from '~/components/SanityImageResponsive'
import BlockContent from 'sanity-blocks-vue-component'
import groq from 'groq'
import sanityClient from '~/sanityClient'
import Hero from '~/components/blocks/Hero'
import OurAllies from '~/components/about/OurAllies'

const query = groq`
  *[_id == "page-about"][0] {
    enAboutText[] {
      ...,
      children[] {
        ...
      }
    },
    esAboutText[] {
      ...,
      children[] {
        ...
      }
    },
    ...
  }
`

export default {
  components: {
    BlockContent,
    CustomButton,
    Hero,
    OurAllies,
    SanityImageResponsive
  },
  computed: {
    locale() { return this.$i18n.locale },
    aboutText() { return this.locale === 'en' ? this.enAboutText : this.esAboutText }
  },
  async asyncData() {
    return await sanityClient.fetch(query)
  }
}
</script>
