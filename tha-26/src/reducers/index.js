import  { displayUsername, displayEmail } from "./display";
import { combineReducers } from "redux";

const rootReducer = combineReducers({displayEmail, displayUsername});

export default rootReducer;