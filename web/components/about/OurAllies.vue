<template>
  <div class="max-w-3xl mx-auto">
    <h2 class="font-MissionGothicBlackItalic uppercase text-4xl text-center">
      {{title}}
    </h2>
    <div class="flex flex-wrap items-center justify-center">
      <div v-for="ally in allies" :key="ally._id"
      :class="`w-1/2 md:w-1/6 flex justify-center h-full`">
        <SanityImage :image="ally.image"
        :height="100"
        fit="clip"
        class="p-2" />
      </div>
    </div>
  </div>
</template>

<script>
import SanityImage from '~/components/SanityImage'

export default {
  components: { SanityImage },
  props: {
    title: {
      required: true,
      type: String
    },
    allies: {
      required: true,
      type: Array
    }
  }
}
</script>
