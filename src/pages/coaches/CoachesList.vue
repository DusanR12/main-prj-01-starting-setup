<template>
  <filter-coach @changed-filters="setFilters"></filter-coach>
  <section>
    <base-card
      ><div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button v-if="!isUserRegistrated" link to="/register">Register as a Coach</base-button>
      </div>
      <ul v-if="hasCoaches">
        <coach-item
          v-for="coach in coaches"
          :key="coach.id"
          :id="coach.id"
          :firstName="coach.firstName"
          :lastName="coach.lastName"
          :areas="coach.areas"
          :hourlyRate="coach.hourlyRate"
        ></coach-item>
      </ul>
      <p v-else>No coaches found</p></base-card
    >
  </section>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import FilterCoach from '../../components/coaches/FilterCoach.vue';
import BaseButton from '../../components/UI/BaseButton.vue';
export default {
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true
      }
    }
  },
  components: {
    CoachItem,
    FilterCoach,
    BaseButton,
  },
  computed: {
    coaches() {
      const allCoaches = this.$store.getters.coaches;
      return allCoaches.filter(coach => {
        if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
          return true
        }
        if (this.activeFilters.backend && coach.areas.includes('backend')) {
          return true
        }
        if (this.activeFilters.career && coach.areas.includes('career')) {
          return true
        }
        return false;
      })
    },

    hasCoaches() {
      return this.$store.getters.hasCoaches;
    },

    isUserRegistrated() {
      return this.$store.getters.isUserRegistrated;
    }
  },

  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
