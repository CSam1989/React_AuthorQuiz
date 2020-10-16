import { ITurnDataState } from "./../../interfaces/reducers.types";
import { Reducer } from "redux";
import { initialState } from "./initialState";
import * as types from "../actions/action.types";
import { TurnDataActionTypes } from "../../interfaces/actions/turnData.types";

export const TurnDataReducer: Reducer<ITurnDataState, TurnDataActionTypes> = (
  state = initialState.turnData,
  action
) => {
  switch (action.type) {
    case types.GET_TURNDATA: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
