import {State} from "../lib/State.js";

const state = State({ message: "Hello" })

export function AppState() {
    const { subscribe, unsubscribe, update } = state

    function setMessage(message) {
        update(() => ({ message }))
    }

    return {
        setMessage,
        subscribe,
        unsubscribe
    }
}
