import { combineReducers } from "redux";
import exampleReducer from "./slices"; // Import your slice reducers

const rootReducer = combineReducers({
  mf2: exampleReducer,
  // Add other reducers here
});

export default rootReducer;
