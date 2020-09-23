<template>
  <div>
    <Hero :image="hero.image" :full-height="hero.fullHeight" :title="title[locale]"
    x-axis-location="start" class="mb-8" />
    <div class="p-4">
      <div class="flex flex-col items-center w-full p-4 text-xl leading-tight text-blue">
        <h2 class="text-2xl text-aqua font-bold italic mb-2 uppercase">
          {{contacts[0].name[locale]}}
        </h2>
        <div v-if="contacts[0].address" class="address">
          <BlockContent :blocks="contacts[0].address" />
        </div>
        <div v-if="contacts[0].email">
          <span class="font-bold">
            Email:
          </span> {{ contacts[0].email }}
        </div>
        <div v-if="contacts[0].phone">
          <span class="font-bold">
            Call:
          </span> {{ contacts[0].phone }}
        </div>
        <div v-if="contacts[0].fax">
          <span class="font-bold">
            Fax:
          </span> {{ contacts[0].fax }}
        </div>
      </div>

      <div class="flex flex-col items-center w-full p-4 text-xl leading-tight text-blue">
        <h2 class="text-2xl text-pink font-bold italic mb-2 uppercase">
          {{contacts[1].name[locale]}}
        </h2>
        <div v-if="contacts[1].address" class="address mb-1">
          <BlockContent :blocks="contacts[1].address" />
        </div>
        <div v-if="contacts[1].email">
          <span class="font-bold">
            Email:
          </span> {{ contacts[1].email }}
        </div>
        <div v-if="contacts[1].phone">
          <span class="font-bold">
            Call:
          </span> {{ contacts[1].phone }}
        </div>
        <div v-if="contacts[1].fax">
          <span class="font-bold">
            Fax:
          </span> {{ contacts[1].fax }}
        </div>
      </div>

      <div v-if="secondaryContacts.length"
      class="flex flex-wrap md:justify-between w-full pb-8 max-w-6xl mx-auto text-blue">
        <div v-for="contact in secondaryContacts" :key="contact._id"
        class="flex flex-col items-center w-full md:w-1/3 flex-grow p-4 text-xl leading-tight">
          <h2 class="text-2xl font-bold italic uppercase">
            {{contact.name[locale]}}
          </h2>
          <div v-if="contact.address" class="address">
            <BlockContent :blocks="contact.address" />
          </div>
          <div v-if="contact.email">
            <span class="font-bold">
              Email:
            </span> {{ contact.email }}
          </div>
          <div v-if="contact.phone">
            <span class="font-bold">
              Call:
            </span> {{ contact.phone }}
          </div>
          <div v-if="contact.fax">
            <span class="font-bold">
              Fax:
            </span> {{ contact.fax }}
          </div>
        </div>
      </div>

      <div class="w-full flex justify-center pb-8 pt-4">
        <CustomButton :button="button"
        class="bg-aqua text-white text-shadow-pink text-3xl font-bold italic p-2 rounded py-1" />
      </div>
    </div>
    <NewsletterSubscription :newsletter-info="newsletterSubscription" class="-mb-8" />
  </div>
</template>

<script>
import BlockContent from 'sanity-blocks-vue-component'
import CustomButton from '~/components/blocks/CustomButton'
import groq from 'groq'
import sanityClient from '~/sanityClient'
import Hero from '~/components/blocks/Hero'
import NewsletterSubscription from '~/components/blocks/NewsletterSubscription'


const query = groq`
  *[_id == "page-contact"][0] {
    ...
  }
`

export default {
  components: {
    BlockContent,
    CustomButton,
    Hero,
    NewsletterSubscription
  },
  computed: {
    locale() { return this.$i18n.locale },
    secondaryContacts() { return this.contacts.slice(2, this.contacts.length) }
  },
  async asyncData() {
    return await sanityClient.fetch(query)
  }
}
</script>

<style scoped>
  input {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .address p {
    @apply leading-5 text-center;
  }
</style>
