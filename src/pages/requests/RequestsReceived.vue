<template>
  <section>
    <base-card>
      <h1>Requests Received</h1>
      <ul>
        <request-item
          v-for="request in requests"
          :key="request.message"
          :email="request.email"
          :message="request.message"
        ></request-item>
      </ul>
    </base-card>
  </section>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue';
export default {
  components: {
    RequestItem,
  },

  computed: {
    requests() {
      return this.$store.getters.allRequests;
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
