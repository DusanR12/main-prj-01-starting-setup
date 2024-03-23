<template>
  <section>
    <base-card>
      <h2>Register as a coach now!</h2>
      <form @submit.prevent="onSubmit">
        <div class="form-control">
          <label for="firstname">Firstname</label>
          <input
            v-model.trim="firstName"
            type="text"
            id="firstname"
            name="firstName"
          />
        </div>
        <div class="form-control">
          <label for="lastname">Lastname</label>
          <input
            v-model.trim="lastName"
            type="text"
            id="lastname"
            name="lastName"
          />
        </div>
        <div class="form-control">
          <label for="description">Description</label>
          <textarea
            v-model.trim="description"
            name="description"
            id="description"
            cols="20"
            rows="5"
          ></textarea>
        </div>
        <div class="form-control">
          <label for="hourlyRate">Hourly Rate</label>
          <input
            v-model="hourlyRate"
            type="number"
            id="hourlyRate"
            name="hourlyRate"
          />
        </div>
        <div class="form-control">
          <h4>Areas of expertise</h4>
          <div>
            <label for="frontend">Frontend Development</label>
            <input
              @change="onAreaPick"
              type="checkbox"
              name="frontendArea"
              id="frontend"
            />
          </div>
          <div>
            <label for="backend">Backend Development</label>
            <input
              @change="onAreaPick"
              type="checkbox"
              name="backendArea"
              id="backend"
            />
          </div>
          <div>
            <label for="career">Career Advisory</label>
            <input
              @change="onAreaPick"
              type="checkbox"
              name="careerArea"
              id="career"
            />
          </div>
        </div>
        <base-button>Register</base-button>
      </form>
    </base-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      areas: [],
      description: '',
      hourlyRate: '',
    };
  },

  computed: {
    numOfCoaches() {
      return this.$store.getters.coaches.length;
    },

    formattedID() {
      return 'c' + (this.numOfCoaches + 1);
    },
  },

  methods: {
    onAreaPick(event) {
      const checked = event.target.checked;
      if (checked) {
        this.areas.push(event.target.id);
      }
    },

    onSubmit() {
      const newCoach = {
        id: this.formattedID,
        firstName: this.firstName,
        lastName: this.lastName,
        areas: this.areas,
        description: this.description,
        hourlyRate: this.hourlyRate,
      };

      this.$store.commit('addCoach', newCoach);
    },
  },
};
</script>

<style #scoped>
.form-control {
  margin: 0.5rem 0;
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
