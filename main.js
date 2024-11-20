import "./App.js"
import {route} from "./lib/route.js";

route("/", () => {
    document.querySelector("#app")
        .appendChild(document.createElement("blog-app"))
})
