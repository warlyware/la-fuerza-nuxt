<template>
  <div class="max-w-5xl mx-auto justify-between p-4">
    <h1 class="text-center">
      {{ $t('contact.title') }}
    </h1>

    <img :src="mapUrl" alt="">
  </div>
</template>

<script>
export default {
  data() {
    return {
      mapUrl: `https://open.mapquestapi.com/staticmap/v4/getmap?key=${process.env.MAPQUEST_KEY}&size=600,400&zoom=13&center=47.6062,-122.3321&pois=1,40.0986,-76.3988,-20,-20`
    }
  }
}
</script>
