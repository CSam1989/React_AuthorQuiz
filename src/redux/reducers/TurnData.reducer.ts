import { ITurnDataState } from "./../../interfaces/reducers.types";
import { Reducer } from "redux";
import { initialState } from "./initialState";
import * as types from "../actions/action.types";
import { TurnDataActionTypes } from "../../interfaces/actions/turnData.types";

export const TurnDataReducer: Reducer<ITurnDataState, TurnDataActionTypes> = (
  state = initialState.turndata,
  action
) => {
  switch (action.type) {
    case types.GET_TURNDATA: {
      return {
        ...action.payload,
      };
    }
    case types.SET_ANSWEREDCHOICE: {
      return {
        ...state,
        highlight: state.author.books.includes(action.payload)
          ? "correct"
          : "fault",
      };
    }
    default:
      return state;
  }
};
