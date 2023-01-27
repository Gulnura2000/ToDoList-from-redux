import { combineReducers } from "redux";
import { mode } from "./mode";
import { tasks } from "./tasks";

const rootReducer = ()=>combineReducers({
    tasks : tasks,
    mode: mode,
})

export default rootReducer