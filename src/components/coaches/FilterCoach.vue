<template>
  <section>
    <base-card>
      <h2>Find Your Coach</h2>
      <span class="filter-option">
        <input @change="onChange" type="checkbox" id="frontend" checked />
        <label for="frontend">Frontend</label>
      </span>
      <span class="filter-option">
        <input @change="onChange" type="checkbox" id="backend" checked />
        <label for="backend">Backend</label>
      </span>
      <span class="filter-option">
        <input @change="onChange" type="checkbox" id="career" checked />
        <label for="career">Career</label>
      </span>
    </base-card>
  </section>
</template>

<script>
export default {
  emits: ['changed-filters'],
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },

  methods: {
    onChange(event) {
      const inputID = event.target.id;
      const isChecked = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputID]: isChecked,
      };

      this.filters = updatedFilters;
      this.$emit('changed-filters', updatedFilters);
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
