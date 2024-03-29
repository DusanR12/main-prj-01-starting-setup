<template>
  <base-dialog @close="handleError" :show="!!error" title="An error occurred!">
    <p>{{ error }}</p>
  </base-dialog>
  <section>
    <base-card>
      <h1>Requests Received</h1>
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
      <ul v-else-if="hasRequests">
        <request-item
          v-for="request in requests"
          :key="request.message"
          :email="request.email"
          :message="request.message"
        ></request-item>
      </ul>
      <p class="no-requests" v-else>No requests received</p>
    </base-card>
  </section>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue';
export default {
  created() {
    this.loadRequests();
  },
  components: {
    RequestItem,
  },

  data() {
    return {
      isLoading: false,
      error: null,
    };
  },

  computed: {
    requests() {
      return this.$store.getters.allRequests;
    },

    hasRequests() {
      return this.requests.length > 0;
    },
  },

  methods: {
    async loadRequests() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('fetchRequests');
      } catch (error) {
        this.error = error;
      }
      this.isLoading = false;
    },

    handleError() {
      this.error = null;
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
.no-requests {
  text-align: center;
}
</style>
