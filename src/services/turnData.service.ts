import { ITurnDataState } from "./../interfaces/reducers.types";
import { authors } from "../data/authors.data";
import { shuffle, random } from "lodash";

export const getTurnData = (): ITurnDataState => {
  const allBooks = authors.reduce(
    (acc: string[], item) => acc.concat(item.books),
    []
  );
  const fourRandomBooks = shuffle(allBooks).slice(0, 4);
  const randomBook = fourRandomBooks[random(fourRandomBooks.length - 1)];
  const author = authors.filter((author) => author.books.includes(randomBook));

  return {
    books: fourRandomBooks,
    author: author[0],
    highlight: "",
  };
};
