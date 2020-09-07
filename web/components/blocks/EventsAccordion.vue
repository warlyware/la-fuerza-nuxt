<template>
  <vsa-list>
    <vsa-item>
      <vsa-heading>
        {{ location }}
      </vsa-heading>

      <vsa-content>
        <div class="flex flex-wrap">
          <div v-for="event in events" :key="event._id"
          class="text-xl leading-7 w-full lg:w-1/2 my-2 lg:my-0">
            <div class="flex flex-col border border-blue rounded p-4 mx-2 h-full text-blue">
              <div class="font-bold not-italic mb-2">
                {{event.name[locale]}}
              </div>
              <div class="mb-2">
                {{ $moment(event.startDate).format('MMMM Do') }} -
                {{ $moment(event.endDate).format('MMMM Do') }}
              </div>
              <div v-if="partner" class="text-base" >
                <span class="font-bold">
                  Partner:
                </span> {{event.partnerName}}
              </div>
              <div class="text-base">
                <span class="font-bold">
                  Location:
                </span> {{event.venue}}
              </div>
              <div class="mb-2 text-base">
                <span class="font-bold">
                  Price:
                </span> {{ event.price === 0 ? 'FREE' : `$${event.price}`}}
              </div>
              <hr class="inline-block mb-2" />
              <div class="font-normal text-base flex-1 mb-2">
                <BlockContent :blocks="event[`${locale}Description`]" />
              </div>
              <div class="w-full flex justify-center items-end">
                <a class="p-4 py-2 inline-block bg-pink rounded-lg text-white" :href="event.link"
                target="_blank">
                  {{ locale === 'en' ? 'Register' : 'Registrarse'}}
                </a>
              </div>
            </div>
          </div>
        </div>
      </vsa-content>
    </vsa-item>
  </vsa-list>
</template>

<script>
import BlockContent from 'sanity-blocks-vue-component'

export default {
  components: {
    BlockContent
  },
  props: {
    events: {
      type: Array,
      required: true
    },
    location: {
      type: String,
      required: true
    }
  },
  computed: {
    locale() { return this.$i18n.locale }
  }
}
</script>

<style lang="scss">
.vsa-heading {
 @apply truncate;
}
.vsa-list {
  @apply max-w-full rounded border-pink;
}
.vsa-item__trigger {
  &:hover, &:focus { @apply bg-blue; }
  @apply p-2 leading-5 text-blue;
}
.vsa-item__trigger__content {
  @apply text-2xl uppercase truncate block;
}
@media (min-width: 1024px) {
  .vsa-item__trigger__content {
    @apply text-5xl py-3 uppercase truncate block;
  }
}


</style>
