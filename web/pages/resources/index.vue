<template>
  <div class="max-w-5xl mx-auto justify-between p-4 md:p-0">
    <div class="flex flex-wrap w-full uppercase mb-8">
      <h2 class="w-full mb-0 font-bold leading-tight">
        {{bookSectionTitle[locale]}}
      </h2>
      <p class="italic">
        {{bookSectionDescription[locale]}}
      </p>
      <div class="w-full flex flex-wrap h-fill items-center -mx-2">
        <nuxt-link v-for="book in first4Books" :key="book._id"
        :to="`/resources/books/${book.slug.current}`"
        class="p-2 w-full md:w-1/5">
          <SanityImage
          :image="book[`${locale}Cover`]"
          :height="300"
          fit="crop" />
        </nuxt-link>
        <div class="w-full md:w-1/5 flex items-center justify-center md:justify-start flex-shrink">
          <div class="md-4 md:mt-0 m-0 py-0 md:ml-4">
            <nuxt-link to="/resources/books"
            class="bg-aqua text-white text-shadow-pink px-4 rounded-lg italic uppercase text-2xl md:text-lg">
              {{viewMore}}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap w-full uppercase mb-8">
      <h2 class="w-full mb-0 font-bold leading-tight">
        {{tipSectionTitle[locale]}}
      </h2>
      <p class="italic">
        {{tipSectionDescription[locale]}}
      </p>
      <div class="w-full flex flex-wrap">
        <nuxt-link v-for="tip in first4Tips" :key="tip._id"
        :to="`/resources/tips`"
        class="p-2 w-full md:w-1/5 square-box">
          <SanityImage
          :image="tip.image"
          :height="300"
          fit="crop" class="square-content" />
        </nuxt-link>
        <!-- <div class="w-1/2 md:w-1/5">
          <img class="p-2 cursor-pointer" src="//placehold.it/300" alt="">
        </div>
        <div class="w-1/2 md:w-1/5">
          <img class="p-2 cursor-pointer" src="//placehold.it/300" alt="">
        </div>
        <div class="w-1/2 md:w-1/5">
          <img class="p-2 cursor-pointer" src="//placehold.it/300" alt="">
        </div> -->
        <div class="w-full md:w-1/5 flex items-center justify-center md:justify-start flex-shrink">
          <div class="md-4 md:mt-0 m-0 py-0 md:ml-4">
            <nuxt-link to="/resources/tips"
            class="bg-aqua text-white text-shadow-pink px-4 rounded-lg italic uppercase text-2xl md:text-lg">
              {{viewMore}}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SanityImage from '~/components/SanityImage'
import groq from 'groq'
import sanityClient from '~/sanityClient'

const query = groq`
  *[_id == "page-resources"][0] {
    ...,
    books[]->{
      ...
    },
    tips[]->{
      ...
    }
  }
`

export default {
  components: { SanityImage },
  computed: {
    locale() { return this.$i18n.locale },
    first4Books() { return this.books.length <= 4 ? this.books : this.books.slice(0, 4)},
    first4Tips() { return this.tips.length <= 4 ? this.tips : this.tips.slice(0, 4)},
    viewMore() { return this.locale === 'en' ? 'View More' : 'Ver Más' },
  },
  async asyncData() {
    return await sanityClient.fetch(query)
  }
}
</script>

<style scoped>
.square-box {
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
}

.square-content {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  text-align:center;
  font: 0/0 a;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    position: relative;
    text-align: center;
    font: 0/0 a;
    vertical-align: middle;

    .old-ie & {
      display: inline-block;
    }
  }

  img {
    margin: 0 auto;
    align-self: center;
    text-align: center;
    vertical-align: middle;

    &.horizontal {
      width: 100%;
    }

    &.vertical {
      height: 100%;
      margin: 0;
    }

    .old-ie & {
      display: inline-block;
      max-height: 100%;
      max-width: 100%;
    }
  }
}
</style>
