import {Component} from "../lib/Component.js";
import {AppState} from "./App.state.js";

class UserMessage extends Component {
    static observedAttributes = ["username"]

    appState = AppState()

    setMessage = ({ message }) => {
        this.setState(() => ({ message }))
    }

    handleClick = () => {
        this.appState.setMessage("Goodbye")
    }

    onConnect() {
        this.setState(() => ({
            username: this.getAttribute("username")
        }))

        this.appState.subscribe(this.setMessage)

        const $el = this.shadow.querySelector(".user-message")
        $el.addEventListener("click", this.handleClick)
    }

    onDisconnect() {
        AppState.unsubscribe(this.setMessage)
    }

    render() {
        const { message = "Hello", username } = this.state

        return `<p class="user-message">${message} ${username}</p>`
    }
}

customElements.define("user-message", UserMessage)
