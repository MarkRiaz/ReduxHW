const GET_START = "GET_START"
const GET_PAUSE = "GET_PAUSE"

function getStart() {

    return {
        type: GET_START,
    }
}

function getPause() {
    return {
        type: GET_PAUSE,
    }
}

export { GET_START, GET_PAUSE, getStart, getPause}

