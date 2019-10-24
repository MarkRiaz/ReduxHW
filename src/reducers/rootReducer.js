import { combineReducers } from 'redux';
import buttonClick from "./buttonReducer";

const rootReducer = combineReducers({
    buttonReducer: buttonClick,
});

export default rootReducer;