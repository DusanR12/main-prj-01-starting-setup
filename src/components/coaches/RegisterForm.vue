<template>
  <section>
    <base-card>
      <h2>Register as a coach now!</h2>
      <form @submit.prevent="onSubmit">
        <div class="form-control" :class="{invalid: !firstName.isValid}">
          <label for="firstname">Firstname</label>
          <input
            v-model.trim="firstName.val"
            type="text"
            id="firstname"
            name="firstName"
            @blur="clearValidity(firstName)"
          />
          <p v-if="!firstName.isValid" class="errorText">Please enter a vaild name!</p>
        </div>
        <div class="form-control" :class="{invalid: !lastName.isValid}">
          <label for="lastname">Lastname</label>
          <input
            v-model.trim="lastName.val"
            type="text"
            id="lastname"
            name="lastName"
            @blur="clearValidity(lastName)"
          />
          <p v-if="!lastName.isValid" class="errorText">Please enter a vaild lastname!</p>
        </div>
        <div class="form-control" :class="{invalid: !description.isValid}">
          <label for="description">Description</label>
          <textarea
            v-model.trim="description.val"
            name="description"
            id="description"
            cols="20"
            rows="5"
            @blur="clearValidity(description)"
          ></textarea>
          <p v-if="!description.isValid" class="errorText">Please enter a vaild description!</p>
        </div>
        <div class="form-control" :class="{invalid: !hourlyRate.isValid}">
          <label for="hourlyRate">Hourly Rate</label>
          <input
            v-model="hourlyRate.val"
            type="number"
            id="hourlyRate"
            name="hourlyRate"
            @blur="clearValidity(hourlyRate)"
          />
          <p v-if="!hourlyRate.isValid" class="errorText">Rate must be greater that 0!</p>
        </div>
        <div class="form-control" :class="{invalid: !areas.isValid}">
          <h4>Areas of expertise</h4>
          <div>
            <label for="frontend">Frontend Development</label>
            <input
              @change="onAreaPick"
              type="checkbox"
              name="frontendArea"
              id="frontend"
              @blur="clearValidity(areas)"
            />
          </div>
          <div>
            <label for="backend">Backend Development</label>
            <input
              @change="onAreaPick"
              type="checkbox"
              name="backendArea"
              id="backend"
              @blur="clearValidity(areas)"
            />
          </div>
          <div>
            <label for="career">Career Advisory</label>
            <input
              @change="onAreaPick"
              type="checkbox"
              name="careerArea"
              id="career"
              @blur="clearValidity(areas)"
            />
          </div>
          <p v-if="!areas.isValid" class="errorText">You must pick at least one area of expertise!</p>
        </div>
        <p class="errorText" v-if="formIsInvalid">Please fix the above errors and submit again!</p>
        <base-button>Register</base-button>
      </form>
    </base-card>
  </section>
</template>

<script>
export default {
  emits: ['save-data'],
  data() {
    return {
      firstName: {
        val: '',
        isValid: true
      },
      lastName: {
        val: '',
        isValid: true
      },
      description: {
        val: '',
        isValid: true
      },
      hourlyRate: {
        val: null,
        isValid: true
      },
      areas: {
        val: [],
        isValid: true
      },
      formIsInvalid: false
    };
  },

  methods: {
    onAreaPick(event) {
      const checked = event.target.checked;
      if (checked) {
        this.areas.val.push(event.target.id);
      }
    },

    validateForm() {
      this.formIsInvalid = false
      if (this.firstName.val === '') {
        this.firstName.isValid = false
        this.formIsInvalid = true
      }
      if (this.lastName.val === '') {
        this.lastName.isValid = false
        this.formIsInvalid = true
      }
      if (this.description.val === '') {
        this.description.isValid = false
        this.formIsInvalid = true
      }

      if (this.hourlyRate.val == null || this.hourlyRate.val < 0) {
        this.hourlyRate.isValid = false
        this.formIsInvalid = true
      }

      if (this.areas.val.length < 1) {
        this.areas.isValid = false
        this.formIsInvalid = true
      }
    },

    clearValidity(input) {
      input.isValid = true
    },

    onSubmit() {
      this.validateForm()

      if (this.formIsInvalid) {
        return
      }

      const newCoach = {
        id: 'c3',
        firstName: this.firstName.val,
        lastName: this.lastName.val,
        areas: this.areas.val,
        description: this.description.val,
        hourlyRate: this.hourlyRate.val,
      };

      this.$emit('save-data', newCoach);     
    },
  },
};
</script>

<style #scoped>
.form-control {
  margin: 0.5rem 0;
}

.errorText {
  color: red;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
