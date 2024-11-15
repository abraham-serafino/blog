import {route} from "./lib/route.js";

route("/:page", (request) => {
    const { path, params, query } = request
    console.log(path, params, query)
})
