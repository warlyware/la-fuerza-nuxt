<template>
  <div class="pt-8 max-w-5xl mx-auto md:pt-32 mb-8 content px-8 lg:px-0 w-full">
    <h1 class="font-MissionGothicBlack text-6xl uppercase">
      Libros
    </h1>
    <div class="max-w-5xl mx-auto flex flex-wrap w-full">
      <Resource />
      <Resource />
      <Resource />
      <Resource />
      <Resource />
      <Resource />
      <Resource />
      <Resource />
      <Resource />
    </div>
  </div>
</template>

<script>
import Resource from '~/components/resources/Resource'
export default {
  components: { Resource }
}
</script>

<style lang="scss" scoped>

</style>
