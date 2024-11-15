import {Component} from "./lib/Component.js";
import "./App/UserMessage.js"

class App extends Component {
    styles() {
        return `
        .app {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: antiquewhite;
        }`
    }

    render() {
        return `
            <div class="app">
                <user-message username="world"></user-message>
                <user-message username="everyone"></user-message>
            </div>
        `
    }
}

customElements.define("blog-app", App)
