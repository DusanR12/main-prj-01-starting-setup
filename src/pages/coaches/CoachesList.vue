<template>
  <base-dialog @close="handleError" :show="!!error" title="An error occurred!">
    <p>{{ error }}</p>
  </base-dialog>
  <filter-coach @changed-filters="setFilters"></filter-coach>
  <section>
    <base-card
      ><div class="controls">
        <base-button @click="loadCoaches" mode="outline">Refresh</base-button>
        <base-button v-if="!isUserRegistrated && !isLoading" link to="/register"
          >Register as a Coach</base-button
        >
      </div>
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
      <ul v-else-if="hasCoaches">
        <coach-item
          v-for="coach in filteredCoaches"
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

export default {
  created() {
    this.loadCoaches();
  },
  data() {
    return {
      isLoading: false,
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
      error: null,
    };
  },
  components: {
    CoachItem,
    FilterCoach,
  },
  computed: {
    filteredCoaches() {
      const allCoaches = this.$store.getters.coaches;
      return allCoaches.filter((coach) => {
        if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
          return true;
        }
        if (this.activeFilters.backend && coach.areas.includes('backend')) {
          return true;
        }
        if (this.activeFilters.career && coach.areas.includes('career')) {
          return true;
        }
        return false;
      });
    },

    hasCoaches() {
      return this.$store.getters.hasCoaches;
    },

    isUserRegistrated() {
      const userID = this.$store.getters.getUserID;
      const coaches = this.$store.getters.coaches;

      return coaches.some((coach) => {
        return coach.id === userID;
      });
    },
  },

  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },

    async loadCoaches() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('loadCoaches');
      } catch (error) {
        this.error = error;
      }
      this.isLoading = false;
    },

    handleError() {
      this.error = null
    }
  },
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
