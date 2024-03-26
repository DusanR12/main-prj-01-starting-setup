export default {
    addRequests(state, payload) {
        state.requests.push(payload)
        console.log(state.requests)
    }
}