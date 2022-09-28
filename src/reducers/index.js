import { combineReducers } from "redux";
import counterReducer from "./counter";
import isLoginReducer from "./isLoginReducer";

const allReducers = combineReducers({
    counter: counterReducer,
    isLogin: isLoginReducer
});

export default allReducers;