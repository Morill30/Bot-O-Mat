import RobotAdderReducer from "./robotAdderRed";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  robotAdder: RobotAdderReducer
});
//can add more reducers here

export default allReducers;
