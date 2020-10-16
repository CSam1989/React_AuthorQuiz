export interface IAppState {
  turnData: ITurnDataState;
}

export interface ITurnDataState {
  books: string[];
  author: IAuthor;
  highlight: string;
}

export interface IAuthor {
  name: string;
  imageUrl: string;
  books: string[];
}
