export function State(initialState) {
    let state = {}
    let subscriptions = []

    function update(cb) {
        state = {
            ...state,
            ...cb(state)
        }

        for (let alertSubscriber of subscriptions) {
            alertSubscriber(state)
        }
    }

    function subscribe(cb) {
        subscriptions.push(cb)
    }

    function unsubscribe(cb) {
        subscriptions = subscriptions.filter((subscription) =>
            subscription !== cb)
    }

    return {update, subscribe, unsubscribe}
}