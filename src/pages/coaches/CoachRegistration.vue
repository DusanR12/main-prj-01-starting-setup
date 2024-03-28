<template>
  <register-form @send-data="sendData"></register-form>
</template>

<script>
import RegisterForm from '../../components/coaches/RegisterForm.vue';
export default {
  components: {
    RegisterForm,
  },

  methods: {
    sendData(newCoach) {
      this.$store.dispatch('setCoach', newCoach);
      this.$router.replace('/coaches');
      this.$store.commit('changeUserStatus');
    },
  },
};
</script>
