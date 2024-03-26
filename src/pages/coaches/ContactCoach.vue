<template>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="email">Your E-Mail</label>
        <input id="email" name="email" type="email" v-model.trim="email.val" />
      </div>
      <div class="form-control">
        <label for="message">Message</label>
        <textarea name="message" id="message" cols="20" rows="5" v-model.trim="message.val"></textarea>
      </div>
      <div class="center">
        <base-button>Send Message</base-button>
      </div>
      <p class="errors" v-if="formIsInvalid">Please enter a valid email or message</p>
    </form> 
</template>

<script>
export default {
  data() {
    return {
      email: {
        val: '',
        isValid: true
      },
      message: {
        val: '',
        isValid: true
      },

      formIsInvalid: false
    }
  },

  methods: {
    validateForm() {
      this.formIsInvalid = false

      if (this.email.val === '') {
        this.email.isValid = false
        this.formIsInvalid = true
      } else if (this.message.val === '') {
        this.message.isValid = false
        this.formIsInvalid = true
      }
    },

    submitForm() {
      this.validateForm()

      if (this.formIsInvalid) {
        return
      } 

      const newRequest = {
        email: this.email.val,
        message: this.message.val
      }

      this.$store.commit('addRequests', newRequest)
    }
  } 
};
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.center {
  text-align: center;
}
</style>
