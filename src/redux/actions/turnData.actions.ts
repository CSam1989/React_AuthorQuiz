import { ITurnDataState } from "./../../interfaces/reducers.types";
import { TurnDataActionTypes } from "./../../interfaces/actions/turnData.types";
import * as types from "./action.types";

export const getTurnDataAction = (
  payload: ITurnDataState
): TurnDataActionTypes => {
  return {
    type: types.GET_TURNDATA,
    payload,
  };
};

export const setAnsweredChoice = (payload: string): TurnDataActionTypes => {
  return {
    type: types.SET_ANSWEREDCHOICE,
    payload,
  };
};
