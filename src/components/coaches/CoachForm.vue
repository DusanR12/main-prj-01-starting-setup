<template>
  <section>
    <base-card>
      <form @submit.prevent="onSubmit">
        <h3>Register as a coach now!</h3>
        <div>
          <label for="firstname">Firstname</label>
          <input
            v-model="firstName"
            type="text"
            id="firstname"
            name="firstName"
          />
        </div>
        <div>
          <label for="lastname">Lastname</label>
          <input
            v-model="lastName"
            type="text"
            id="lastname"
            name="lastName"
          />
        </div>
        <div>
          <label for="description">Description</label>
          <textarea
            v-model="description"
            name="description"
            id="description"
            cols="20"
            rows="5"
          ></textarea>
        </div>
        <div>
          <label for="hourlyRate">Hourly Rate</label>
          <input
            v-model="hourlyRate"
            type="text"
            id="hourlyRate"
            name="hourlyRate"
          />
        </div>
        <div>
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
        return this.$store.getters.coaches.length
    },

    formattedID() {
        return 'c' + (this.numOfCoaches + 1);
    }
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
          hourlyRate: this.hourlyRate
        }

        this.$store.commit('addCoach', newCoach)
    },
  },
};
</script>
