import { ITurnDataState } from "./../reducers.types";
import * as types from "../../redux/actions/action.types";

export interface IGetTurnDataAction {
  type: typeof types.GET_TURNDATA;
  payload: ITurnDataState;
}

export interface ISetAnsweredChoice {
  type: typeof types.SET_ANSWEREDCHOICE;
  payload: string;
}

export type TurnDataActionTypes = IGetTurnDataAction | ISetAnsweredChoice;
