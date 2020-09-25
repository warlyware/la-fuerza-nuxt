<template>
  <div>
    <Hero :image="hero.image" :full-height="hero.fullHeight" :title="title[locale]" :bg-color="hero.bgColor"
    x-axis-location="start" class="mb-2 md:mb-8" :class="hero.fullHeight ? '' : 'h-24 overflow-hidden'" />
    <div class="p-4">
      <div class="flex flex-col items-center w-full p-4 text-xl leading-tight text-blue text-center">
        <h2 class="text-2xl text-aqua font-bold italic mb-2 uppercase">
          {{contacts[0].name[locale]}}
        </h2>
        <div v-if="contacts[0].address" class="address">
          <BlockContent :blocks="contacts[0].address" />
        </div>
        <div v-if="contacts[0].email" class="mb-2 break-all">
          <span class="font-bold uppercase">
            {{emailLabel}}:
          </span><br> {{ contacts[0].email }}
        </div>
        <div v-if="contacts[0].phone" class="mb-2">
          <span class="font-bold uppercase">
            {{callLabel}}:
          </span><br> {{ contacts[0].phone }}
        </div>
        <div v-if="contacts[0].fax">
          <span class="font-bold uppercase">
            {{faxLabel}}:
          </span><br> {{ contacts[0].fax }}
        </div>
      </div>

      <div class="flex flex-col items-center w-full p-4 text-xl leading-tight text-blue text-center">
        <h2 class="text-2xl text-pink font-bold italic mb-2 uppercase">
          {{contacts[1].name[locale]}}
        </h2>
        <div v-if="contacts[1].address" class="address mb-1">
          <BlockContent :blocks="contacts[1].address" />
        </div>
        <div v-if="contacts[1].email" class="mb-2 break-all">
          <span class="font-bold uppercase">
            {{emailLabel}}:
          </span><br> {{ contacts[1].email }}
        </div>
        <div v-if="contacts[1].phone" class="mb-2">
          <span class="font-bold uppercase">
            {{callLabel}}:
          </span><br> {{ contacts[1].phone }}
        </div>
        <div v-if="contacts[1].fax">
          <span class="font-bold uppercase">
            {{faxLabel}}:
          </span><br> {{ contacts[1].fax }}
        </div>
      </div>

      <div v-if="secondaryContacts.length"
      class="flex flex-wrap md:justify-between w-full pb-8 max-w-6xl mx-auto text-blue text-center">
        <div v-for="contact in secondaryContacts" :key="contact._id"
        class="flex flex-col items-center w-full md:w-1/3 flex-grow p-4 text-xl leading-tight">
          <h2 class="text-2xl font-bold italic uppercase mb-2">
            {{contact.name[locale]}}
          </h2>
          <div v-if="contact.address" class="address">
            <BlockContent :blocks="contact.address" />
          </div>
          <div v-if="contact.email" class="mb-2 break-all">
            <span class="font-bold uppercase">
              {{emailLabel}}:
            </span><br> {{ contact.email }}
          </div>
          <div v-if="contact.phone" class="mb-2">
            <span class="font-bold uppercase">
              {{callLabel}}:
            </span><br> {{ contact.phone }}
          </div>
          <div v-if="contact.fax">
            <span class="font-bold uppercase">
              {{faxLabel}}:
            </span><br> {{ contact.fax }}
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
    secondaryContacts() { return this.contacts.slice(2, this.contacts.length) },
    callLabel() { return this.locale === 'en' ? 'Call' : 'Teléphono' },
    emailLabel() { return this.locale === 'en' ? 'Email' : 'Correo Electrónico' },
    faxLabel() { return 'Fax' }
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
