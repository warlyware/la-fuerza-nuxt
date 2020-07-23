<template>
  <section class="container">
    <h1 class="title">Sessions</h1>
    <div class="sessionGridContainer">
      <SessionGrid
        v-if="sessionsWithoutBreak"
        :sessions="sessionsWithoutBreak"
      />
    </div>
  </section>
</template>

<script>
import SessionGrid from '~/components/SessionGrid'

export default {
  components: { SessionGrid },
  data() {
    return {
      program: this.$store.getters.getProgram
    }
  },
  computed: {
    sessionsWithoutBreak: data => {
      if (data.program && data.program.schedule) {
        return data.program.schedule.filter(
          i => i.session.sessionType !== 'break'
        )
      }
    }
  }
}
</script>
