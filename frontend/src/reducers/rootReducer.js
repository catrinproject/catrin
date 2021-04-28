import { combineReducers } from "redux";
import alertReducer from "./alertReducer";
import authReducer from "./authReducer";
import profileReducer from "./profileReducer";

const rootReducer = combineReducers({
  alertReducer,
  authReducer,
  profileReducer,
});

export default rootReducer;
