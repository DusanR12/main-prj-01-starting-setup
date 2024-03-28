import { createStore } from 'vuex';
import coachesModule from './modules/coaches/index.js';
import requestsModule from './modules/requests/index.js';

const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestsModule,
  },

  state() {
    return {
      userID: 'c3',
    };
  },

  getters: {
    getUserID(state) {
      return state.userID;
    },
  },
});

export default store;
