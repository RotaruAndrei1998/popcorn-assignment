import { createContext } from "react";
import { Book } from "interfaces";

interface ContextState {
  // set the type of state you want to handle with context e.g.
  readingList: Array<Book> | [];
  addBook: Function;
  removeBook: Function;
}
//set an empty object as default state
const ReadingListContext = createContext({
  readingList: [],
  addBook: () => {},
  removeBook: () => {},
} as ContextState);

export default ReadingListContext;
