import { TurnDataActionTypes } from "./../../interfaces/actions/turnData.types";
import * as types from "./action.types";

export const getTurnDataAction = (): TurnDataActionTypes => {
  return {
    type: types.GET_TURNDATA,
  };
};
