export class Component extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "open"})
        this.state = {}
        this._render();
    }

    setState(cb) {
        this.state = { ...this.state, ...cb(this.state) }
        this._render()
    }

    connectedCallback() {
        if (typeof this.onConnect === "function") this.onConnect()
    }

    disconnectedComponent() {
        if (typeof this.onDisconnect === "function") this.onDisconnect()
    }

    _render() {
        let render = () => ``
        if (typeof this.render === "function") render = this.render.bind(this)

        let styles = () => ``
        if (typeof this.styles === "function") styles = this.styles.bind(this)

        this.shadow.innerHTML = `
            <style>${styles()}</style>
            ${render()}
        `
    }
}
