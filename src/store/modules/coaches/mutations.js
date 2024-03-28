export default {
    registerCoach(state, newCoach) {
        state.coaches.push(newCoach)
    },

    setCoaches(state, payload) {
        state.coaches = payload
    },

}