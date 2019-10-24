import {GET_START, GET_PAUSE} from "./rootActions";

const initialState = {
    start: false,
    pause: true
};

function buttonClick(state = initialState, action) {
    if (action.type === GET_START) {
        return {
            ...state,
            start: true,
            pause: false
        }
    } else if (action.type === GET_PAUSE) {
        return {
            ...state,
            pause: true
        }
    } else {
        return state;
    }
};
export default buttonClick;
