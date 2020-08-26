<template>
  <vsa-list>
  <!-- Here you can use v-for to loop through items  -->
    <vsa-item>
      <vsa-heading>
        {{ heading }}
      </vsa-heading>

      <vsa-content>
        <ul class="font-MissionGothicBold uppercase text-xl leading-6">
          <li>
            - Description and Eventbrite/FB Event Link
          </li>
          <li>
            - Description and Eventbrite/FB Event Link
          </li>
          <li>
            - Description and Eventbrite/FB Event Link
          </li>
          <li>
            - Description and Eventbrite/FB Event Link
          </li>
          <li>
            - Description and Eventbrite/FB Event Link
          </li>
        </ul>
      </vsa-content>
    </vsa-item>
  </vsa-list>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      default: 'HEADING + -'
    }
  }
}
</script>

<style lang="scss">
.vsa-list {
  @apply max-w-full rounded border-pink;
}
.vsa-item__trigger {
  &:hover, &:focus { @apply bg-blue; }
  @apply p-2 leading-5 text-blue;
}
.vsa-item__trigger__content {
  @apply text-5xl font-MissionGothicBlackItalic uppercase;
}

</style>
