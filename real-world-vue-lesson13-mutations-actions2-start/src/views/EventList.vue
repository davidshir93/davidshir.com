<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
    <router-link v-if="page !== 1" :to="{ name: 'event-list', query: { page: page-1}}" rel="prev">
      Prev page
    </router-link>
    <router-link v-if="this.eventsTotal > this.page * 2" :to="{ name: 'event-list', query: { page: page+1 }}" rel="next">
      Next page
    </router-link>

  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { mapState } from 'vuex'

export default {
  components: {
    EventCard
  },
  created() {
    this.$store.dispatch('fetchEvents', {
      perPage: 2,
      page: this.page
    })
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1
    },
    ...mapState(['events', 'eventsTotal'])
  }
}
</script>
