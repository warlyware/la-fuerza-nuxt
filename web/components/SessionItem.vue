<template>
  <li class="session">
    <div class="meta">
      <div class="time">
        <TimeCalc
          :from-time="scheduleItem.fromTime"
          :duration="scheduleItem.duration"
        />
      </div>
      <div class="sessiontype">
        {{ scheduleItem.session.sessionType }} &middot;
        {{ scheduleItem.duration }}min
      </div>
    </div>
    <div class="content">
      <h3>
        <nuxt-link :to="{ path: `/sessions/${scheduleItem.session._id}` }">{{
          scheduleItem.session.title || 'Undefined title'
        }}</nuxt-link>
      </h3>
      <p>
        {{ scheduleItem.session.summary }}
      </p>
      <PersonsList :persons="scheduleItem.session.persons" />
    </div>
  </li>
</template>
<script>
import PersonsList from '~/components/PersonsList'
import TimeCalc from '~/components/TimeCalc'
export default {
  components: {
    PersonsList,
    TimeCalc
  },
  props: {
    scheduleItem: {
      type: Object,
      default() {},
      fromTime: {
        type: Date
      },
      session: {
        summary: {
          type: String,
          default: 'Missing summary'
        },
        persons: {
          type: Array,
          default: () => []
        }
      }
    }
  }
}
</script>
