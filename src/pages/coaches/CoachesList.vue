<template>
  <section>
    <h2 style="margin-bottom: 8rem">Filter</h2>
  </section>
  <div>
    <div class="controls">
      <button>Refresh</button>
      <router-link to="/register">Register as a Coach</router-link>
    </div>
    <ul v-if="hasCoaches">
      <coach-item v-for="coach in allCoaches"
        :key="coach.id"
        :id="coach.id"
        :firstName="coach.firstName"
        :lastName="coach.lastName"
        :areas="coach.areas"
        :hourlyRate="coach.hourlyRate"
      ></coach-item>
    </ul>
    <p v-else>No coaches found</p>
  </div>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
export default {
  components: {
    CoachItem,
  },
  computed: {
    allCoaches() {
      return this.$store.getters.coaches;
    },

    hasCoaches() {
      return this.$store.getters.hasCoaches;
    },
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
