<template>
  <div class="p-4">
    <h1 class="text-center">
      {{ $t('contact.title') }}
    </h1>

    <div class="flex flex-col items-center w-full uppercase p-4 text-xl leading-tight">
      <div class="text-2xl text-aqua font-MissionGothicBlackItalic">
        Literacy Partners
      </div>
      <div>
        75 Maiden Lane, Suite 11102
      </div>
      <div>
        New York, NY 10038
      </div>
    </div>

    <div class="flex flex-col items-center w-full uppercase p-4 text-xl leading-tight">
      <div class="text-2xl text-pink font-MissionGothicBlackItalic">
        General Information
      </div>
      <div>
        Call
      </div>
      <div>
        Fax
      </div>
      <div>
        Email
      </div>
    </div>

    <div class="flex flex-wrap md:justify-between w-full pb-8 max-w-6xl mx-auto">
      <div class="flex flex-col items-center md:items-start w-full md:w-1/3 flex-grow uppercase p-4 text-xl leading-tight">
        <div class="text-2xl font-MissionGothicBlackItalic">
          General Inquiries
        </div>
        <div>
          Call
        </div>
        <div>
          Fax
        </div>
        <div>
          Email
        </div>
      </div>
      <div class="flex flex-col items-center md:w-1/3 flex-grow w-full uppercase p-4 text-xl leading-tight">
        <div class="text-2xl font-MissionGothicBlackItalic">
          General Inquiries
        </div>
        <div>
          Call
        </div>
        <div>
          Fax
        </div>
        <div>
          Email
        </div>
      </div>
      <div class="flex flex-col items-center md:items-end md:w-1/3 flex-grow w-full uppercase p-4 text-xl leading-tight">
        <div class="text-2xl font-MissionGothicBlackItalic">
          General Inquiries
        </div>
        <div>
          Call
        </div>
        <div>
          Fax
        </div>
        <div>
          Email
        </div>
      </div>
    </div>

    <div class="w-full flex justify-center pb-8">
      <button class="bg-aqua text-white text-shadow-pink text-3xl uppercase font-MissionGothicBlackItalic p-2 rounded py-1">
        Trabaja Con Nosotros
      </button>
    </div>
    <Divider />
    <div class="flex flex-wrap justify-between w-full pb-8 max-w-6xl mx-auto">
      <h2 class="text-sm font-normal uppercase w-full mb-16">
        Subscribe to our newsletter to receive notifications and exclusive invitations to our events
      </h2>

      <label for="first-name" class="flex flex-col w-full md:w-1/2 mb-4 rounded">
        <span class="flex-shrink-0">
          First Name
        </span>
        <div class="pr-4 w-full">
          <input class="w-full bg-gray-light border border-gray rounded p-2"
          type="text" name="first-name">
        </div>
      </label>
      <label for="last-name" class="flex flex-col w-full md:w-1/2 mb-4 rounded">
        <span class="flex-shrink-0">
          Last Name
        </span>
        <div class="pr-4 w-full">
          <input class="w-full bg-gray-light border border-gray rounded p-2"
          type="text" name="last-name">
        </div>
      </label>
      <label for="email" class="flex flex-col w-full md:w-1/2 mb-4 rounded">
        <span class="flex-shrink-0">
          Email *
        </span>
        <div class="pr-4 w-full">
          <input class="w-full bg-gray-light border border-gray rounded p-2"
          type="text" name="email">
        </div>
      </label>
      <div class="flex w-full">
        <button class="p-4 py-1 bg-pink text-white rounded uppercase font-MissionGothic">
          Submit
        </button>
      </div>
    </div>
    <!-- <img :src="mapUrl" alt=""> -->
  </div>
</template>

<script>
import Divider from '~/components/Divider'
export default {
  components: {
    Divider
  },
  data() {
    return {
      // mapUrl: `https://open.mapquestapi.com/staticmap/v4/getmap?key=${process.env.MAPQUEST_KEY}&size=600,400&zoom=13&center=47.6062,-122.3321&pois=1,40.0986,-76.3988,-20,-20`

    }
  }
}
</script>

<style scoped>
  input {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
</style>
