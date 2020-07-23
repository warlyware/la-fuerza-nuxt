<template>
  <ul v-if="filteredSessions" class="sessionGrid">
    <li v-for="session in filteredSessions" :key="session._id" class="session">
      <nuxt-link :to="`/sessions/${session._id}`">
        <span class="top">
          <span>
            <span class="type">{{ session.sessionType }}</span>
            <h2 class="sessionTitle">{{ session.title }}</h2>
          </span>
          <span
            class="time"
            :title="session.fromTime | date('MMMM DD YYYY h:MM a')"
          >
            {{ session.fromTime | date('h:MM a') }}
          </span>
        </span>
        <p>
          {{ session.summary }}
        </p>
      </nuxt-link>
      <PersonsList
        v-if="showPersons && session.persons"
        :persons="session.persons"
      />
    </li>
  </ul>
</template>

<script>
import PersonsList from '~/components/PersonsList'
import { dateFilter } from 'vue-date-fns'

export default {
  filters: {
    date: dateFilter
  },
  components: {
    PersonsList
  },
  props: {
    showPersons: {
      type: Boolean,
      default: false
    },
    sessions: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    filteredSessions: props => {
      return props.sessions.map(session => {
        return {
          ...session,
          ...session.session,
          persons:
            session.persons &&
            session.persons.filter(
              person =>
                person.person &&
                person.person.slug &&
                person.person.slug.current
            )
        }
      })
    }
  }
}
</script>
