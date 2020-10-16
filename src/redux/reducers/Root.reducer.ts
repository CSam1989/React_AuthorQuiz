import { TurnDataReducer } from "./TurnData.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ turndata: TurnDataReducer });

export default rootReducer;
