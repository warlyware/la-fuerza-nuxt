<template>
  <div class="w-full">
    <Hero :image="hero.image" :full-height="hero.fullHeight" :title="title[locale]" :bg-color="hero.bgColor"
    x-axis-location="start" class="mb-2 md:mb-8" :class="hero.fullHeight ? '' : 'h-24 overflow-hidden'" />
    <div v-if="shareMenu"
    class="h-screen fixed items-center top-0 left-0 -mt-16 z-10 pointer-events-none flex">
      <SideShareMenu class="pointer-events-auto" :share-menu="shareMenu" :scroll-distance="400" />
    </div>
    <div class="w-full flex flex-wrap mb-8">
      <div class="w-full lg:w-1/2 text-white leading-tight lg:pr-2 mb-2 lg:mb-0">
        <div id="block1" class="text-lg xl:text-2xl p-8 md:px-16 bg-blue h-full flex justify-center items-center">
          <BlockContent :blocks="this[`${locale}Block1Text`]" />
        </div>
      </div>
      <div class="w-full lg:w-1/2 my-1/2 lg:pl-2">
        <youtube player-width="100%" player-height="100%"
        class="video-responsive flex-grow"
        :video-id="getYoutubeId(videoUrl)"  />
      </div>
    </div>
    <div class="w-full border border-blue p-8 mb-8">
      <div class="w-full text-center text-2xl mb-0 px-4 lg:px-0 text-blue">
        <BlockContent :blocks="this[`${locale}Banner1Text`]" />
        <div class="flex justify-center w-full mt-2">
          <a href="#events" class="text-white text-center bg-blue p-2 py-1 rounded mt-4">
            {{eventsLinkButtonText[locale]}}
          </a>
        </div>
      </div>
    </div>

    <div class="max-w-6xl m-auto flex flex-wrap px-8 lg:px-16 text-xl mb-12 tracking-wide">
      <div class="p-4 w-full lg:w-1/2 lg:flex lg:flex-1">
        <div class="border rounded-lg w-full flex items-start h-full p-8 shadow-black bg-blue text-white">
          <BlockContent :blocks="this[`${locale}Block2Text`]" />
        </div>
      </div>
      <div class="p-4 w-full lg:w-1/2 lg:flex lg:flex-1">
        <div class="border rounded-lg w-full flex items-start h-full p-8 shadow-black bg-blue text-white">
          <BlockContent :blocks="this[`${locale}Block3Text`]" />
        </div>
      </div>
    </div>

    <div class="max-w-4xl m-auto flex flex-wrap mb-8 p-4 rounded-lg text-xl bg-pink text-white">
      <div class="w-full text-center mb-0 px-8 lg:px-0">
        <BlockContent :blocks="this[`${locale}Banner2Text`]" />
      </div>
      <div class="w-full flex justify-center mt-2">
        <CustomButton :button="banner2Button"
        class="bg-aqua text-blue rounded-lg p-2 py-1 text-2xl font-bold italic tracking-wide text-shadow-white-side"
        />
      </div>
    </div>

    <div class="max-w-5xl m-auto mb-12 px-8 lg:px-0">
      <div v-for="block in workshopImageBlocks" :key="block._id"
      class="flex flex-wrap lg:flex-no-wrap w-full justify-center lg:justify-start mb-8 lg:mb-4 px-4 lg:px-0">
        <div class="h-64 w-64 flex items-center justify-center border-2 rounded-full flex-shrink-0 mx-8 mb-4 lg:mb-0 overflow-hidden"
        :class="getImageWrapperClass(block)">
          <SanityImage :image="block.image"
          class="h-full bg-blue text-white flex justify-center items-center"
          :height="500"
          fit="crop" />
        </div>
        <div :class="`text-2xl leading-7 flex items-center mb-0 text-${block.borderColor} text-center lg:text-left`">
          <BlockContent :blocks="block[`${locale}Text`]" />
        </div>
      </div>
    </div>

    <!-- <div class="max-w-4xl m-auto flex flex-wrap mb-12">
      <div class="w-full mx-8 lg:mx-0 lg:w-2/3 bg-blue flex items-center rounded-lg tracking-wider">
        <div class="text-white text-xl mb-0 leading-tight p-4">
          <BlockContent :blocks="this[`${locale}Block4Text`]" />
        </div>
      </div>
      <div class="w-full lg:w-1/3 px-8 lg:px-0 flex-shrink-0">
        <div class="text-5xl justify-center items-center flex flex-col h-full italic text-blue border border-blue rounded">
          <div class="text-blue">
            {{block5Word1[locale]}}
          </div>
          <div class="h-12 bg-pink w-1" />
          <div class="text-blue">
            {{block5Word2[locale]}}
          </div>
          <div class="h-12 bg-aqua w-1" />
          <div class="text-blue">
            {{block5Word3[locale]}}
          </div>
        </div>
      </div>
    </div> -->

    <div class="max-w-4xl m-auto flex flex-wrap p-4 rounded-lg text-xl bg-pink text-white mb-8">
      <div class="w-full text-center mb-0 leading-8">
        <BlockContent :blocks="this[`${locale}Banner3Text`]" />
      </div>
      <div class="w-full flex justify-center">
        <CustomButton :button="banner3Button"
        class="bg-aqua text-blue rounded-lg p-2 py-1 text-2xl font-bold italic tracking-wide text-shadow-white-side" />
      </div>
    </div>

    <div id="events" class="w-full bg-aqua p-8 mb-8">
      <div class="w-full text-center text-2xl mb-0 text-white">
        <BlockContent :blocks="this[`${locale}Banner4Text`]" />
      </div>
    </div>

    <div class="max-w-5xl m-auto flex flex-wrap px-12 lg:px-4 mb-6">
      <div v-for="(events, location, i) in formattedEvents" :key="i" class="mb-2 w-full">
        <EventsAccordion :location="location" :events="events" />
      </div>
    </div>

    <NewsletterSubscription :newsletter-info="newsletterSubscription" class="-mb-8" />
  </div>
</template>

<script>
import CustomButton from '~/components/blocks/CustomButton'
import SideShareMenu from '~/components/SideShareMenu'
import BlockContent from 'sanity-blocks-vue-component'
import SanityImage from '~/components/SanityImage'
import groq from 'groq'
import sanityClient from '~/sanityClient'
import getYoutubeId from 'get-youtube-id'
import Hero from '~/components/blocks/Hero'
import NewsletterSubscription from '~/components/blocks/NewsletterSubscription'
import EventsAccordion from '~/components/blocks/EventsAccordion'

const query = groq`
  *[_id == "page-workshops"][0] {
    events[]->{
      ...
    },
    ...
  }
`

export default {
  components: {
    BlockContent,
    CustomButton,
    Hero,
    NewsletterSubscription,
    EventsAccordion,
    SanityImage,
    SideShareMenu
  },
  data() {
    return {
      collabBlockTitleOddStyle: 'border-pink shadow-pink-side',
      collabBlockTitleEvenStyle: 'border-aqua shadow-aqua-side order-first lg:order-last',
      collabBlockTextOddStyle: 'text-pink',
      collabBlockTextEvenStyle: 'text-aqua lg:text-right',
    }
  },
  computed: {
    locale() { return this.$i18n.locale },
    block1Text() { return this[`${this.locale}Block1Text`]},
    formattedEvents() {
      let formattedEvents = {}
      this.events.forEach(event => {
        if (!formattedEvents[event.location]) {
          formattedEvents[event.location] = []
        }
        formattedEvents[event.location].push(event)
      })

      return formattedEvents
    }
  },
  async asyncData() {
    return await sanityClient.fetch(query)
  },
  methods: {
    getYoutubeId,
    getImageWrapperClass({ borderColor }) {
      return `
         border-${borderColor || 'blue'} shadow-${borderColor}-side
      `
    }
  }
}
</script>

<style lang="scss" scoped>
.shadow-black {
  -webkit-box-shadow: 8px 8px 0px -1px #1bcfc9;
  -moz-box-shadow: 8px 8px 0px -1px #1bcfc9;
  box-shadow: 8px 8px 0px -1px #1bcfc9;
}
.shadow-pink-side {
  -webkit-box-shadow: 14px 0px 0px -1px #ea3cad;
  -moz-box-shadow: 14px 0px 0px -1px #ea3cad;
  box-shadow: 14px 0px 0px -1px #ea3cad;
}
.shadow-aqua-side {
  -webkit-box-shadow: 14px 0px 0px -1px #1bcfc9;
  -moz-box-shadow: 14px 0px 0px -1px #1bcfc9;
  box-shadow: 14px 0px 0px -1px #1bcfc9;
}
.shadow-orange-side {
  -webkit-box-shadow: 14px 0px 0px -1px #ff5000;
  -moz-box-shadow: 14px 0px 0px -1px #ff5000;
  box-shadow: 14px 0px 0px -1px #ff5000;
}
.shadow-blue-side {
  -webkit-box-shadow: 14px 0px 0px -1px #19105e;
  -moz-box-shadow: 14px 0px 0px -1px #19105e;
  box-shadow: 14px 0px 0px -1px #19105e;
}

.font-bold .italic p {
  @apply font-bold italic;
}
#block1 strong, #block1 a {
  @apply text-pink;
}
#block1 p {
  @apply my-4;
}
// #block2 strong, #block2 a {
//   @apply text-aqua;
// }

</style>
