<template>
  <div class="w-full">
    <Hero :image="hero.image" :full-height="hero.fullHeight" :title="title[locale]"
    x-axis-location="start" class="mb-8" />
    <div class="flex flex-wrap px-4 max-w-5xl m-auto mb-4">
      <template v-for="(block, i) in joinBlocks">
        <div :key="block._id"
        class="w-full md:w-1/2 px-8 flex flex-col items-center md:-ml-4 mb-16">
          <SanityImage
          :image="block.icon"
          :width="100"
          :height="100" fit="crop"
          class="mb-4" />
          <div class="w-full text-lg mb-4 text-center font-bold">
            <BlockContent :blocks="block[`${locale}Text`]" />
          </div>
          <div class="w-full flex justify-center">
            <a :href="block.button.link" :target="block.button.newWindow ? '_blank' : ''"
            class="bg-pink rounded-lg p-2 py-1 text-2xl uppercase font-bold italic tracking-wide text-white">
              {{block.button.text[locale]}}
            </a>
          </div>
        </div>

        <VerticalDivider v-if="i % 2 !== 1" :key="block._id" />
      </template>

      <!-- <div class="w-full md:w-1/2 px-8 flex flex-col items-center md:-mr-8 mb-16">
        <img src="/images/webinar.png" alt="" class="w-24 mb-4">
        <div class="w-full text-lg mb-4 text-center font-MissionGothicBold">{{ $t('join.block-2.body') }}</div>
        <div class="w-full flex justify-center">
          <button class="bg-pink rounded-lg p-2 py-1 text-2xl uppercase font-bold italic tracking-wide text-white">
            Quiero Emoderar
          </button>
        </div>
      </div> -->

      <!-- <div class="w-full md:w-1/2 px-8 flex flex-col items-center md:-ml-4 mb-16">
        <img src="/images/phone.png" alt="" class="w-24 mb-4">
        <div class="w-full text-lg mb-4 text-center font-MissionGothicBold">{{ $t('join.block-1.body') }}</div>
        <div class="w-full flex justify-center">
          <button class="bg-pink rounded-lg p-2 py-1 text-2xl uppercase font-bold italic tracking-wide text-white">
            Comparte
          </button>
        </div>
      </div>

      <VerticalDivider />

      <div class="w-full md:w-1/2 px-8 flex flex-col items-center md:-mr-8 mb-16">
        <img src="/images/hashtag.png" alt="" class="w-24 mb-4">
        <div class="w-full text-lg mb-4 text-center font-MissionGothicBold">{{ $t('join.block-1.body') }}</div>
        <div class="w-full flex justify-center">
          <button class="bg-pink rounded-lg p-2 py-1 text-2xl uppercase font-bold italic tracking-wide text-white">
            #FamLatinaFridays
          </button>
        </div>
      </div>

      <div class="w-full md:w-1/2 px-8 flex flex-col items-center md:-ml-4 mb-16">
        <img src="/images/volunteer.png" alt="" class="w-24 mb-4">
        <div class="w-full text-lg mb-4 text-center font-MissionGothicBold">{{ $t('join.block-1.body') }}</div>
        <div class="w-full flex justify-center">
          <button class="bg-pink rounded-lg p-2 py-1 text-2xl uppercase font-bold italic tracking-wide text-white">
            Volunteer
          </button>
        </div>
      </div>

      <VerticalDivider />

      <div class="w-full md:w-1/2 px-8 flex flex-col items-center md:-mr-8 mb-16">
        <img src="/images/heart.png" alt="" class="w-24 mb-4">
        <div class="w-full text-lg mb-4 text-center font-MissionGothicBold">{{ $t('join.block-1.body') }}</div>
        <div class="w-full flex justify-center">
          <button class="bg-pink rounded-lg p-2 py-1 text-2xl uppercase font-bold italic tracking-wide text-white">
            Donate
          </button>
        </div>
      </div> -->
    </div>

    <NewsletterSubscription class="-mb-8" />
  </div>
</template>

<script>
import groq from 'groq'
import sanityClient from '~/sanityClient'
import Hero from '~/components/blocks/Hero'
import SanityImage from '~/components/SanityImage'
import BlockContent from 'sanity-blocks-vue-component'
import NewsletterSubscription from '~/components/blocks/NewsletterSubscription'
import VerticalDivider from '~/components/blocks/VerticalDivider'

const query = groq`
  *[_id == "page-join"][0] {
    ...
  }
`

export default {
  components: { Hero, BlockContent, NewsletterSubscription, SanityImage, VerticalDivider },
  computed: {
    locale() { return this.$i18n.locale }
  },
  async asyncData() {
    return await sanityClient.fetch(query)
  }
}
</script>
