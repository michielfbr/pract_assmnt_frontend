import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import spacesReducer from "./spaces/reducer";

export default combineReducers({
  appState,
  user,
  spacesReducer
});
