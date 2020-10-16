import { IAppState } from "./../../interfaces/reducers.types";

export const initialState: IAppState = {
  turndata: {
    books: [],
    author: {
      name: "",
      imageUrl: "",
      books: [],
    },
    highlight: "",
  },
};
