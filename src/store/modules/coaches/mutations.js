export default {
    addCoach(state, newCoach) {
        state.coaches.push(newCoach)
    },

    changeUserStatus(state) {
        state.userIsRegistrated = true
    }
}