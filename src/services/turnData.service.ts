import { ITurnDataState } from "./../interfaces/reducers.types";
import { authors } from "../data/authors.data";
import { shuffle, random } from "lodash";

export const getTurnData = (): ITurnDataState => {
  const authorsLocalStorage = window.localStorage.getItem('authors');
  const allAuthors = authorsLocalStorage ? authors.concat(JSON.parse(authorsLocalStorage)) : authors
  const allBooks = allAuthors.reduce(
    (acc: string[], item) => acc.concat(item.books),
    []
  );
  const fourRandomBooks = shuffle(allBooks).slice(0, 4);
  const randomBook = fourRandomBooks[random(fourRandomBooks.length - 1)];
  const author = allAuthors.filter((author) => author.books.includes(randomBook));

  return {
    books: fourRandomBooks,
    author: author[0],
    highlight: "",
  };
};
