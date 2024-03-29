import axios from 'axios';
export default {
  storeRequests(context, payload) {
    const newRequest = {
      coachID: payload.coachID,
      email: payload.email,
      message: payload.message,
    };

    axios
      .post(
        `https://find-your-coach-a2ac9-default-rtdb.firebaseio.com/requests/${newRequest.coachID}.json`,
        newRequest
      )
      .then((res) => {
        newRequest.coachID = res.name;
        context.commit('addRequests', newRequest);
      })
      .catch((error) => console.error(error));
  },

  async fetchRequests(context) {
    const userID = context.rootGetters.getUserID;
    const requests = [];
    try {
      const response = await axios.get(
        `https://find-your-coach-a2ac9-default-rtdb.firebaseio.com/requests/${userID}.json`
      );

      const responseData = response.data;

      for (const key in responseData) {
        const request = {
          id: key,
          coachID: responseData[key].coachID,
          email: responseData[key].email,
          message: responseData[key].message,
        };

        requests.push(request);
      }
      context.commit('setRequests', requests);

    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data);
      } else if (error.request) {
        const noResponse = error.request;
        throw new Error(noResponse);
      } else {
        throw new Error(error.message || 'Failed to fetch');
      }
    }
  },
};
