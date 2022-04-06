import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";


const allReducers = combineReducers({
  transactionTotal: counterReducer,
  loggedIn: loggedReducer,
});

export default allReducers;
