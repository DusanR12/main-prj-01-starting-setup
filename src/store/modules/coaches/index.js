import getters from './getters';
import actions from './actions';
import mutations from './mutations';

export default {
  state() {
    return {
      coaches: [
        {
          id: 'c1',
          firstName: 'Nedja',
          lastName: 'Radulovic',
          areas: [
            'career'
          ],
          description: 'My name is Nedja Radulovic',
          hourlyRate: 40,
        },
      ],
    };
  },

  mutations,
  actions,
  getters,
};
