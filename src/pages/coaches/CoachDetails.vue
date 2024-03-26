<template>
  <section>
    <base-card>
      <h3>{{ fullName }}</h3>
      <h4>{{ rate }}</h4>
    </base-card>
  </section>
  <section>
      <base-card
        ><h3>Interested? Reach out now!</h3>
        <base-button link :to="coachContactLink">Contact</base-button
        ><router-view></router-view
      ></base-card>
  </section>
  <section>
    <base-card
      ><base-badge
        v-for="area in areas"
        :key="area"
        :type="area"
        :title="area"
      ></base-badge>
      <p>{{ description }}</p>
    </base-card>
  </section>
</template>

<script>
export default {
  computed: {
    viewedCoachId() {
      return this.$route.params.id;
    },

    viewedCoach() {
      const coaches = this.$store.getters.coaches;

      const viewedCoach = coaches.find((coach) => {
        return coach.id === this.viewedCoachId;
      });

      return viewedCoach;
    },

    fullName() {
      return this.viewedCoach.firstName + ' ' + this.viewedCoach.lastName;
    },

    rate() {
      return `$${this.viewedCoach.hourlyRate}/hour`;
    },

    coachContactLink() {
      return this.$route.path + '/contact';
    },

    description() {
      return this.viewedCoach.description;
    },

    areas() {
      return this.viewedCoach.areas;
    },
  },
};
</script>
