<template>
  <register-form @send-data="sendData"></register-form>
</template>

<script>
import RegisterForm from '../../components/coaches/RegisterForm.vue';
import axios from 'axios';
export default {
  components: {
    RegisterForm,
  },

  methods: {
    sendData(newCoach) {
      axios
        .post(
          'https://find-your-coach-a2ac9-default-rtdb.firebaseio.com/coaches.json', {
            newCoach
          }
          
        )
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      this.$store.commit('changeUserStatus');
      this.$router.replace('/coaches');
    },
  },
};
</script>
