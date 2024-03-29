import axios from 'axios';
export default {
  setCoach(context, payload) {
    const newCoach = {
      firstName: payload.firstName,
      lastName: payload.lastName,
      areas: payload.areas,
      description: payload.description,
      hourlyRate: payload.hourlyRate,
    };

    const userID = context.rootGetters.getUserID;

    axios.put(
      `https://find-your-coach-a2ac9-default-rtdb.firebaseio.com/coaches/${userID}.json`,
      newCoach
    );

    context.commit('registerCoach', {
      ...newCoach,
      userID,
    });
  },

  async loadCoaches(context) {
    const coaches = [];
    try {
      const response = await axios.get(
        'https://find-your-coach-a2ac9-default-rtdb.firebaseeeio.com/coaches'
      );

      const responseData = response.data;

      for (const key in responseData) {
        const coach = {
          id: key,
          firstName: responseData[key].firstName,
          lastName: responseData[key].lastName,
          areas: responseData[key].areas,
          description: responseData[key].description,
          hourlyRate: responseData[key].hourlyRate,
        };

        coaches.push(coach);
        context.commit('setCoaches', coaches);
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
      } else if (error.request) {
        const noResponse = error.request;
        console.log(noResponse);
      } else {
        console.log(error.message || 'Failed to fetch');
      }
    }

    // FETCH APPROACH
    // const response = await fetch(
    //   'https://find-your-coach-a2ac9-default-rtdb.firebaseio.com/coaches.json'
    // );
    // const responseData = await response.json();

    // if (!response.ok) {
    //   // ...
    // }

    // const coaches = [];

    // for (const key in responseData) {
    //   const coach = {
    //     id: key,
    //     firstName: responseData[key].firstName,
    //     lastName: responseData[key].lastName,
    //     areas: responseData[key].areas,
    //     description: responseData[key].description,
    //     hourlyRate: responseData[key].hourlyRate,
    //   };

    //   coaches.push(coach);
    // }

    // context.commit('setCoaches', coaches)

    // TESTING
    // try {
    //   const response = await axios.get(
    //     'https://find-your-coach-a2ac9-default-rtdb.firebaseio.com/coaches.json'
    //   );

    //   const responseData = response.data;
    //   console.log(responseData)
    // } catch (error) {
    //   console.log(error)
    // }
  },
};
