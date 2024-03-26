<template>
  <register-form @save-data="saveData"></register-form>
</template>

<script>
import RegisterForm from '../../components/coaches/RegisterForm.vue';
export default {
  components: {
    RegisterForm,
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
