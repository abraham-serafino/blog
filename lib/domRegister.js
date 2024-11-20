import {parseHTML} from "linkedom";

export async function domRegister(importPath) {
    const { document, customElements, window, HTMLElement } =
        parseHTML("<html></html>")

    global.document = document
    global.customElements = customElements
    global.window = window
    global.HTMLElement = HTMLElement

    await import(importPath)

    function render(html) {
        const $el = document.createElement("div")
        document.body.appendChild($el)
        $el.innerHTML = html
        return $el?.firstElementChild?.shadowRoot
    }

    return {render}
}