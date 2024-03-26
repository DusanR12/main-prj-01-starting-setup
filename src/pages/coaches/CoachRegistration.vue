<template>
  <coach-form @save-data="saveData"></coach-form>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';
export default {
  components: {
    CoachForm,
  },

  methods: {
    saveData(newCoach) {
      this.$store.commit('addCoach', newCoach);
      this.$store.commit('changeUserStatus');
      this.$router.replace('/coaches');
    },
  },
};
</script>
