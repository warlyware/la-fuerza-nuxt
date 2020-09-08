<template>
  <div class="w-full">
    <Hero :image="hero.image" :full-height="hero.fullHeight" :title="title[locale]"
    x-axis-location="start" class="mb-8" />
    <div v-if="shareMenu"
    class="h-screen fixed items-center top-0 left-0 -mt-16 z-10 pointer-events-none flex">
      <SideShareMenu class="pointer-events-auto" :share-menu="shareMenu" :scroll-distance="600" />
    </div>
    <div class="w-full flex flex-wrap mb-8">
      <div class="w-full md:w-1/2 my-1/2 md:pr-2">
        <youtube player-width="100%" player-height="100%"
        class="video-responsive flex-grow"
        :video-id="getYoutubeId(videoUrl)"  />
      </div>
      <div class="w-full md:w-1/2 text-white leading-tight md:pl-2">
        <div class="text-2xl font-bold p-8 bg-blue h-full flex justify-center items-center">
          <BlockContent :blocks="this[`${locale}Block1Text`]" />
        </div>
      </div>
    </div>
    <div class="w-full bg-blue p-8 px-12 lg:px-8 mb-8">
      <div id="banner-1-text" class="w-full text-center text-2xl text-white font-bold mb-0">
        <BlockContent :blocks="this[`${locale}Banner1Text`]" />
      </div>
    </div>
    <div class="max-w-6xl m-auto flex flex-wrap px-8 md:px-16 text-xl mb-12 tracking-wide">
      <div class="p-4 w-full md:w-1/2">
        <div class="border border-blue text-blue rounded-lg w-full flex justify-center items-center h-full p-8 font-bold italic shadow-blue">
          <BlockContent :blocks="this[`${locale}Block2Text`]" />
        </div>
      </div>
      <div class="p-4 w-full md:w-1/2">
        <div class="border border-blue text-blue rounded-lg w-full flex justify-center items-center h-full p-8 font-bold italic shadow-blue">
          <BlockContent :blocks="this[`${locale}Block3Text`]" />
        </div>
      </div>
    </div>

    <div v-for="(block, i) in collaboratorBlocks" :key="block._id"
    class="px-8 md:px-0 md:mb-0">
      <h2 v-if="i === 0" class="text-5xl font-bold italic text-center mb-2 md:mb-0 text-blue">
        {{collaboratorsSectionTitle[locale]}}
      </h2>
      <div
      class="max-w-4xl m-auto flex flex-col flex-wrap md:flex-no-wrap w-full justify-center mb-4">
        <div class="w-full md:w-1/2 px-4 text-blue"
        :class="i % 2 !== 1 ? collabBlockOddStyle : collabBlockEvenStyle">
          <h3 class="text-5xl mb-0 font-bold"
          :class="i % 2 !== 1 ? 'text-pink' : 'text-aqua'">
            {{block.title[locale]}}
          </h3>
          <div class="text-lg font-bold leading-5 flex items-center mb-0">
            <BlockContent :blocks="block[`${locale}Text`]" />
          </div>
        </div>
      </div>
      <Divider v-if="i < collaboratorBlocks.length - 1" class="max-w-5xl m-auto -my-8" />
    </div>

    <div class="max-w-3xl m-auto flex flex-wrap my-12">
      <div class="w-full mx-4 md:mx-0 md:w-1/3 bg-blue flex items-center rounded-lg tracking-wider">
        <h2 class="font-bold italic text-white text-4xl mb-0 leading-tight p-4">
          {{block4Text[locale]}}
        </h2>
      </div>
      <div class="w-full md:w-2/3 mx-4 md:mx-0 border border-blue text-blue rounded p-8">
        <p class="p-4 text-lg text-center mb-0">
          <BlockContent :blocks="this[`${locale}Block5Text`]" />
        </p>
        <div class="w-full flex justify-center mb-8">
          <CustomButton :button="block5Button"
          class="p-2 py-1 font-bold italic text-3xl text-white bg-pink rounded-lg tracking-wide" />
        </div>
      </div>
    </div>
    <div class="max-w-5xl flex flex-wrap m-auto mb-12">
      <div class="w-full md:w-1/2 p-4 px-12 lg:px-8 bg-pink text-white text-center leading-5 flex flex-col justify-between">
        <BlockContent :blocks="this[`${locale}Block6Text`]" />
        <div class="w-full flex justify-center">
          <CustomButton :button="block6Button"
          class="mt-2 p-2 py-3 font-bold italic text-2xl text-white bg-aqua rounded-lg tracking-wide text-shadow-pink" />
        </div>
      </div>
      <div class="w-full md:w-1/2 p-4 px-12 lg:px-8 bg-aqua text-blue text-center leading-relaxed flex flex-col justify-between">
        <BlockContent :blocks="this[`${locale}Block7Text`]" />
        <div class="w-full flex justify-center">
          <CustomButton :button="block7Button"
          class="mt-2 p-2 py-1 font-bold italic text-2xl text-white bg-blue rounded-lg tracking-wide text-shadow-pink" />
        </div>
      </div>
    </div>

    <div class="w-full bg-blue p-8 px-12 lg:px-8 mb-8 font-bold italic text-white text-center text-2xl tracking-wider">
      {{banner2Text[locale]}}
    </div>

    <div class="max-w-5xl m-auto">
      <div class="flex flex-wrap px-4 w-full">
        <div v-for="(events, location, i) in formattedEvents" :key="i" class="mb-2 w-full  flex-1">
          <EventsAccordion :location="location" :events="events" />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import CustomButton from '~/components/blocks/CustomButton'
import BlockContent from 'sanity-blocks-vue-component'
import groq from 'groq'
import sanityClient from '~/sanityClient'
import SideShareMenu from '~/components/SideShareMenu'
import getYoutubeId from 'get-youtube-id'
import Hero from '~/components/blocks/Hero'
import Divider from '~/components/blocks/Divider'
import EventsAccordion from '~/components/blocks/EventsAccordion'

const query = groq`
  *[_id == "page-collaborators"][0] {
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
    Divider,
    EventsAccordion,
    Hero,
    SideShareMenu
  },
  data() {
    return {
      collabBlockOddStyle: '',
      collabBlockEvenStyle: 'self-end',
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
    },
    eventLocations() {
      return Object.keys(this.formattedEvents).length
    }
  },
  async asyncData() {
    return await sanityClient.fetch(query)
  },
  methods: { getYoutubeId }
}
</script>

<style lang="scss" scoped>
.shadow-blue {
  -webkit-box-shadow: 8px 8px 0px -1px #19105e;
  -moz-box-shadow: 8px 8px 0px -1px #19105e;
  box-shadow: 8px 8px 0px -1px #19105e;
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

a {
  @apply text-pink italic;
}
#banner-1-text .font-bold, #banner-1-text .italic {
  @apply text-pink font-bold italic;
}

#banner-1-text a {
  @apply text-pink italic;
}
</style>
