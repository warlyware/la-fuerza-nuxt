<template>
  <div class="w-full">
    <Hero :image="hero.image" :full-height="hero.fullHeight" :title="title[locale]" :bg-color="hero.bgColor"
    x-axis-location="start" class="mb-8" :class="hero.fullHeight ? '' : 'h-24 overflow-hidden'" />
    <div class="w-full flex flex-wrap mb-8">
      <div class="w-full lg:w-1/2 text-white leading-tight lg:pr-2 mb-2 lg:mb-0">
        <div id="block1" class="text-lg xl:text-2xl font-bold p-8 bg-blue h-full flex justify-center items-center">
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
      <div id="block2" class="w-full text-center text-2xl font-bold mb-0">
        <BlockContent :blocks="this[`${locale}Banner1Text`]" />
      </div>
    </div>
    <div class="max-w-3xl m-auto flex flex-wrap px-8 md:px-16 text-xl uppercase mb-12 tracking-wide">
      <div class="p-4 w-full md:w-1/2 text-3xl text-center flex flex-1">
        <div class="border rounded-lg w-full flex justify-center items-center h-auto p-8 font-bold italic shadow-black bg-blue text-white">
          <BlockContent :blocks="this[`${locale}Block2Text`]" />
        </div>
      </div>
      <div class="p-4 w-full md:w-1/2 text-3xl text-center flex flex-1">
        <div class="border rounded-lg w-full flex justify-center items-center h-auto p-8 font-bold italic shadow-black bg-blue text-white">
          <BlockContent :blocks="this[`${locale}Block3Text`]" />
        </div>
      </div>
    </div>

    <div class="max-w-4xl m-auto flex flex-wrap mb-8 p-4 rounded-lg text-xl uppercase bg-pink text-white">
      <div class="w-full text-center text-3xl font-bold mb-0">
        <BlockContent :blocks="this[`${locale}Banner2Text`]" />
      </div>
      <div class="w-full flex justify-center">
        <a :href="banner2Button.link" :target="banner2Button.newWindow ? '_blank' : ''"
        class="bg-aqua text-blue rounded-lg p-2 py-1 text-2xl uppercase font-bold italic tracking-wide">
        <span class="text-blue text-shadow-white-side">
          {{banner2Button.text[locale]}}
        </span>
        </a>
      </div>
    </div>

    <div class="max-w-5xl m-auto mb-12 px-8 md:px-0">
      <div v-for="block in workshopImageBlocks" :key="block._id"
      class="flex flex-wrap md:flex-no-wrap w-full justify-center md:justify-start mb-8 md:mb-4">
        <div class="h-64 w-64 flex items-center justify-center border-2 rounded-full flex-shrink-0 mx-8 mb-4 md:mb-0 overflow-hidden"
        :class="getImageWrapperClass(block)">
          <SanityImage :image="block.image"
          class="h-full bg-blue text-white flex justify-center items-center"
          :height="500"
          fit="crop" />
        </div>
        <div :class="`text-2xl font-bold leading-7 flex items-center mb-0 text-${block.borderColor} text-center md:text-left`">
          <BlockContent :blocks="block[`${locale}Text`]" />
        </div>
      </div>
    </div>

    <div class="max-w-4xl m-auto flex flex-wrap mb-12">
      <div class="w-full mx-4 md:mx-0 md:w-2/3 bg-blue flex items-center rounded-lg uppercase tracking-wider">
        <div class="text-white text-xl mb-0 leading-tight p-4">
          <BlockContent :blocks="this[`${locale}Block4Text`]" />
        </div>
      </div>
      <div class="w-full md:w-1/3 mx-4 md:mx-0 border border-blue rounded flex-shrink-0">
        <div class="text-5xl justify-center items-center flex flex-col h-full italic">
          <div>
            {{block5Word1[locale]}}
          </div>
          <div class="h-12 bg-pink w-1" />
          <div>
            {{block5Word2[locale]}}
          </div>
          <div class="h-12 bg-aqua w-1" />
          <div>
            {{block5Word3[locale]}}
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-4xl m-auto flex flex-wrap p-4 rounded-lg text-xl uppercase bg-pink text-white mb-8">
      <div class="w-full text-center text-3xl font-bold mb-0 leading-8">
        <BlockContent :blocks="this[`${locale}Banner3Text`]" />
      </div>
      <div class="w-full flex justify-center">
        <a :href="banner3Button.link" :target="banner3Button.newWindow ? '_blank' : ''"
        class="bg-aqua text-blue rounded-lg p-2 py-1 text-2xl uppercase font-bold italic tracking-wide">
        <span class="text-blue text-shadow-white-side">
          {{banner3Button.text[locale]}}
        </span>
        </a>
      </div>
    </div>
    <div class="w-full bg-aqua p-8 mb-8">
      <div id="block2" class="w-full text-center text-2xl font-bold mb-0 text-white">
        <BlockContent :blocks="this[`${locale}Banner4Text`]" />
      </div>
    </div>

    <div class="max-w-5xl m-auto flex flex-wrap px-4 mb-6">
      <div v-for="(events, location, i) in formattedEvents" :key="i" class="mb-2 w-full">
        <EventsAccordion :location="location" :events="events" />
      </div>
    </div>

    <NewsletterSubscription class="-mb-8" />
    <!-- <div class="max-w-5xl m-auto mb-12 px-8 md:px-0">
      <h2 class="text-5xl uppercase font-bold italic text-center mb-2 md:mb-0">
        {{collaboratorsSectionTitle[locale]}}
      </h2>
      <div v-for="(block, i) in collaboratorBlocks" :key="block._id"
      class="flex flex-wrap md:flex-no-wrap w-full justify-center md:justify-start mb-8 md:mb-4">
        <div class="h-48 w-48 flex items-center justify-center border rounded-full flex-shrink-0 mx-8 mb-4 md:mb-0"
        :class="i % 2 !== 1 ? collabBlockTitleOddStyle : collabBlockTitleEvenStyle">
          <h3 class="text-4xl mb-0 uppercase font-bold italic">
            {{block.title[locale]}}
          </h3>
        </div>
        <div class="text-lg font-bold leading-5 flex items-center mb-0"
        :class="i % 2 !== 1 ? collabBlockTextOddStyle : collabBlockTextEvenStyle">
          <BlockContent :blocks="block[`${locale}Text`]" />
        </div>
      </div>
    </div>
    <div class="max-w-3xl m-auto flex flex-wrap mb-12">
      <div class="w-full mx-4 md:mx-0 md:w-1/3 bg-blue flex items-center rounded-lg uppercase tracking-wider">
        <h2 class="font-bold italic text-white text-4xl mb-0 leading-tight p-4">
          {{block3Text[locale]}}
        </h2>
      </div>
      <div class="w-full md:w-2/3 mx-4 md:mx-0 border border-blue rounded p-8">
        <p class="p-4 font-bold text-lg text-center mb-0">
          <BlockContent :blocks="this[`${locale}Block4Text`]" />
        </p>
        <div class="w-full flex justify-center mb-8">
          <button class="p-2 py-1 font-bold italic text-3xl text-white bg-pink rounded-lg tracking-wide uppercase">
            {{block4ButtonText[locale]}}
          </button>
        </div>
      </div>
    </div>
    <div class="max-w-5xl flex flex-wrap m-auto mb-12">
      <div class="w-full md:w-1/2 p-4 px-8 bg-pink text-white text-center leading-5">
        <BlockContent :blocks="this[`${locale}Block5Text`]" />
        <button class="mt-2 p-2 font-bold italic text-2xl text-white bg-aqua rounded-lg tracking-wide uppercase text-shadow-pink">
          {{block5ButtonText[locale]}}
        </button>
      </div>
      <div class="w-full md:w-1/2 p-4 px-8 bg-aqua text-blue text-center leading-relaxed flex flex-col justify-center">
        <BlockContent :blocks="this[`${locale}Block6Text`]" />
      </div>
    </div>

    <div class="w-full bg-blue p-8 mb-8 font-MissionGothicBlack text-white text-center text-2xl tracking-wider">
      {{banner2Text[locale]}}
    </div>

    <div class="w-full flex flex-wrap px-4">
      <div class="mb-2 w-full">
        <EventsAccordion heading="Miami" />
      </div>
      <div class="mb-2 w-full">
        <EventsAccordion heading="New York" />
      </div>
      <div class="mb-2 w-full">
        <EventsAccordion heading="Philadelphia" />
      </div>
    </div> -->

  </div>
</template>

<script>
import BlockContent from 'sanity-blocks-vue-component'
import SanityImage from '~/components/SanityImage'
import groq from 'groq'
import sanityClient from '~/sanityClient'
import getYoutubeId from 'get-youtube-id'
import Hero from '~/components/blocks/Hero'
import NewsletterSubscription from '~/components/blocks/NewsletterSubscription'
import EventsAccordion from '~/components/blocks/EventsAccordion'


// import EventsAccordion from '~/components/blocks/EventsAccordion'

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
    Hero,
    NewsletterSubscription,
    EventsAccordion,
    SanityImage
  },
  data() {
    return {
      collabBlockTitleOddStyle: 'border-pink shadow-pink-side',
      collabBlockTitleEvenStyle: 'border-aqua shadow-aqua-side order-first md:order-last',
      collabBlockTextOddStyle: 'text-pink',
      collabBlockTextEvenStyle: 'text-aqua md:text-right',
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

a {
  @apply text-pink italic;
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
#block2 strong, #block2 a {
  @apply text-aqua;
}

</style>
