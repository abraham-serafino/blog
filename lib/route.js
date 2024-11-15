export function route(pattern, handle) {
    const patternAry = pattern.split("/").slice(1)
    const path = window.location.pathname
    const pathAry = path.slice(1).split("/")
    const params = {}

    const searchAry = window.location.search.slice(1).split("&")
    const query = {}

    if (patternAry.length > pathAry.length) {
        return
    }

    for (let i = 0; i < patternAry.length; ++i) {
        const currPattern = patternAry[i]
        const currPath = pathAry[i]

        if (!currPattern.startsWith(":") && currPattern !== currPath) {
            return
        }

        if (currPattern.startsWith(":")) {
            params[currPattern.slice("1")] = currPath
        }
    }

    for (let currQuery of searchAry) {
        const [key, value] = currQuery.split("=")
        query[key] = value
    }

    handle({ path, params, query })
}
