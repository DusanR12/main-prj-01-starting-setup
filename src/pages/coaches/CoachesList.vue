<template>
  <section>
    <h2 style="margin-bottom: 8rem;">Filter</h2>
  </section>
  <section>
    <div class="controls">
      <button>Refresh</button>
      <router-link to="/register">Register as a Coach</router-link>
    </div>
    <ul v-if="hasCoaches">
      <li v-for="coach in allCoaches" :key="coach.id">
        <div>
          <h5>
            {{ coach.firstName }}
          </h5>
        </div>
      </li>
    </ul>
    <p v-else>
      No coaches found
    </p>
  </section>
</template>

<script>
export default {
  computed: {
    allCoaches() {
      return this.$store.getters.coaches;
    },

    hasCoaches() {
      return this.$store.getters.hasCoaches;
    }
  }
}
</script>
