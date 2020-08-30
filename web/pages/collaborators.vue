<template>
  <div class="w-full">
    <Hero :image="hero.image" :full-height="hero.fullHeight" :title="title[locale]"
    x-axis-location="start" class="mb-8" />
    <div class="w-full flex flex-wrap mb-8">
      <div class="w-full md:w-1/2 my-1/2 md:pr-2">
        <youtube player-width="100%" player-height="100%"
        class="video-responsive flex-grow"
        :video-id="getYoutubeId(videoUrl)"  />
      </div>
      <div class="w-full md:w-1/2 text-white leading-tight md:pl-2">
        <div class="text-2xl font-MissionGothicBold p-8 bg-blue h-full flex justify-center items-center">
          <BlockContent :blocks="this[`${locale}Block1Text`]" />
        </div>
      </div>
    </div>
    <div class="w-full bg-blue p-8 mb-8">
      <p class="w-full text-center text-2xl text-white font-MissionGothicBold mb-0">
        {{banner1Text[locale]}}
        <nuxt-link to="/workshops" class="">
          {{banner1LinkText[locale]}}</nuxt-link>.
      </p>
    </div>
    <div class="max-w-3xl m-auto flex flex-wrap px-8 md:px-16 text-xl uppercase mb-12 tracking-wide">
      <div class="p-4 w-full md:w-1/2">
        <div class="border rounded-lg w-full flex justify-center items-center h-auto p-16 font-MissionGothicBlackItalic shadow-black">
          <BlockContent :blocks="this[`${locale}Block2Text`]" />
        </div>
      </div>
      <div class="p-4 w-full md:w-1/2">
        <div class="border rounded-lg w-full flex justify-center items-center h-auto p-16 font-MissionGothicBlackItalic shadow-black">
          <BlockContent :blocks="this[`${locale}Block3Text`]" />
        </div>
      </div>
    </div>
    <div class="max-w-5xl m-auto mb-12 px-8 md:px-0">
      <h2 class="text-5xl uppercase font-MissionGothicBlackItalic text-center mb-2 md:mb-0">
        {{section1Title[locale]}}
      </h2>
      <div class="flex flex-wrap md:flex-no-wrap w-full justify-center md:justify-start mb-8 md:mb-0">
        <div class="h-48 w-48 flex items-center justify-center border border-pink rounded-full shadow-pink-side flex-shrink-0 mx-8 mb-4 md:mb-0">
          <h3 class="text-4xl mb-0 uppercase font-MissionGothicBlack">
            Host
          </h3>
        </div>
        <p class="text-pink text-lg font-MissionGothicBold leading-5 flex items-center mb-0">
          Mauris ullamcorper porttitor pretium. Curabitur quis ex varius, auctor lorem vel, cursus velit.
          Ut eget nunc a nibh sollicitudin luctus ac eget ante. Vivamus nec pharetra dui, et condimentum sapien.
          Etiam eu pretium metus. Vivamus pellentesque ex nec lacus euismod, sit amet ultrices ante efficitur.
        </p>
      </div>
      <div class="flex flex-wrap md:flex-no-wrap justify-center w-full mb-8 md:mb-0">
        <p class="text-aqua text-lg font-MissionGothicBold leading-5 flex items-center text-right">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elementum auctor quam,
          nec ornare lorem maximus non. Quisque aliquet enim sed molestie rutrum. Duis id enim quis enim
          condimentum lacinia. Quisque imperdiet sed erat vitae lobortis. Aenean tempus est nec
          consectetur condimentum.
        </p>
        <div class="h-48 w-48 flex items-center justify-center border border-aqua rounded-full shadow-aqua-side flex-shrink-0 mx-8 mb-4 md:mb-0 order-first md:order-last">
          <h3 class="text-4xl mb-0 uppercase font-MissionGothicBlack">Sponsor</h3>
        </div>
      </div>
    </div>
    <div class="max-w-3xl m-auto flex flex-wrap mb-12">
      <div class="w-full mx-4 md:mx-0 md:w-1/3 bg-blue flex items-center rounded-lg uppercase tracking-wider">
        <h2 class="font-MissionGothicBlackItalic text-white text-4xl mb-0 leading-tight p-4">
          {{block3Text[locale]}}
        </h2>
      </div>
      <div class="w-full md:w-2/3 mx-4 md:mx-0 border border-blue rounded p-8">
        <p class="p-4 font-MissionGothicBold text-lg text-center mb-0">
          <BlockContent :blocks="this[`${locale}Block4Text`]" />
        </p>
        <div class="w-full flex justify-center mb-8">
          <button class="p-2 py-1 font-MissionGothicBlackItalic text-3xl text-white bg-pink rounded-lg tracking-wide uppercase">
            {{block4ButtonText[locale]}}
          </button>
        </div>
      </div>
    </div>
    <div class="max-w-5xl flex flex-wrap m-auto mb-12">
      <div class="w-full md:w-1/2 p-4 px-8 bg-pink text-white text-center leading-5">
        <BlockContent :blocks="this[`${locale}Block5Text`]" />
        <button class="mt-2 p-2 font-MissionGothicBlackItalic text-2xl text-white bg-aqua rounded-lg tracking-wide uppercase text-shadow-pink">
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
    </div>

  </div>
</template>

<script>
import BlockContent from 'sanity-blocks-vue-component'
import groq from 'groq'
import sanityClient from '~/sanityClient'
import getYoutubeId from 'get-youtube-id'
import Hero from '~/components/blocks/Hero'
import EventsAccordion from '~/components/blocks/EventsAccordion'

const query = groq`
  *[_id == "page-collaborators"][0] {
    ...
  }
`

export default {
  components: { BlockContent, Hero, EventsAccordion },
  computed: {
    locale() { return this.$i18n.locale },
    block1Text() { return this[`${this.locale}Block1Text`]}
  },
  async asyncData() {
    return await sanityClient.fetch(query)
  },
  methods: { getYoutubeId }
}
</script>

<style lang="scss" scoped>
.shadow-black {
  -webkit-box-shadow: 8px 8px 0px -1px rgba(0,0,0,1);
  -moz-box-shadow: 8px 8px 0px -1px rgba(0,0,0,1);
  box-shadow: 8px 8px 0px -1px rgba(0,0,0,1);
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
.font-MissionGothicBlackItalic p {

}
</style>
