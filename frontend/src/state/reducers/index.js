import { combineReducers } from "redux";
import reducer from "./searchdata";

const reducers = combineReducers({
mySearchData:reducer
})

// exporting 
export default reducers;