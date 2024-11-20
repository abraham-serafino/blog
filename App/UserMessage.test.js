import {suite, test} from "node:test"
import assert from "node:assert"
import {domRegister} from "../lib/domRegister.js"

suite("UserMessage", async () => {
    const { render } = await domRegister("../App/UserMessage.js")

    test("Should display the correct message", () => {
        const $el = render(`<user-message username="world"></user-message>`)
            .querySelector(".user-message")

        assert.strictEqual($el.innerHTML, "Hello world")
    })

    test("Message should change on click", () => {
        const $el = render(`<user-message username="everyone"></user-message>`)
        const $userMessage = $el.querySelector(".user-message")

        $userMessage.click()

        assert.strictEqual($el.querySelector(".user-message").innerHTML,
            "Goodbye everyone")
    })
})
