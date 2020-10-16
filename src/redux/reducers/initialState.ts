import { IAppState } from "./../../interfaces/reducers.types";

export const initialState: IAppState = {
  turnData: {
    books: [],
    author: {
      name: "",
      imageUrl: "",
      books: [],
    },
    highlight: "",
  },
};
