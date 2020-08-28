<template>
  <div class="w-full">
    <Hero :title="title[locale]" x-axis-location="start" class="mb-8" />
    <div class="max-w-4xl mx-auto justify-between p-4 mb-4 text-center">
      <BlockContent :blocks="aboutText" />
    </div>
    <OurAllies :title="ourAlliesTitle[locale]" class="mb-16" />

    <div class="max-w-4xl mx-auto w-full flex flex-wrap mb-8">
      <div class="w-1/3 h-64 bg-blue text-white flex justify-center items-center">
        <div>Photo</div>
      </div>
      <div class="w-1/3 h-64 text-blue border border-blue flex flex-col justify-center items-center p-8 md:p-12">
        <div class="text-4xl font-MissionGothicBlackItalic leading-tight text-center uppercase mb-2">
          {{block1Text[locale]}}
        </div>
        <div>
          <button class="bg-aqua p-2 py-0 rounded text-white text-shadow-pink">
            {{block1ButtonText[locale]}}
          </button>
        </div>
      </div>
      <div class="w-1/3 h-64 bg-blue text-white flex justify-center items-center">
        <div>Photo</div>
      </div>
    </div>
  </div>
</template>

<script>
import BlockContent from 'sanity-blocks-vue-component'
import groq from 'groq'
import sanityClient from '~/sanityClient'
import Hero from '~/components/blocks/Hero'
import OurAllies from '~/components/about/OurAllies'

const query = groq`
  *[_id == "page-about"][0] {
    aboutTextEn[] {
      ...,
      children[] {
        ...
      }
    },
    aboutTextEs[] {
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
    Hero,
    OurAllies
  },
  computed: {
    locale() { return this.$i18n.locale },
    aboutText() { return this.locale === 'en' ? this.aboutTextEn : this.aboutTextEs }
  },
  async asyncData() {
    return await sanityClient.fetch(query)
  },
}
</script>
