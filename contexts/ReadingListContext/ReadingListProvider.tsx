import ReadingListContext from "./ReadingListContext";
import { ReactNode, useCallback, useMemo, useState } from "react";
import { Book } from "../../interfaces";

interface Props {
  children: ReactNode;
}

const ReadingListProvider = ({ children }: Props) => {
  const [readingList, setReadingList] = useState<Array<Book>>([]);

  const addBook = useCallback((book) => {
    setReadingList((readingList) => {
      if (
        readingList.some((readingListBook) => readingListBook.id === book.id)
      ) {
        console.error("Book is already in the reading list");
        return readingList;
      }

      return [...readingList, book];
    });
  }, []);

  const removeBook = useCallback((id) => {
    setReadingList((readingList) => {
      if (!readingList.some((readingListBook) => readingListBook.id === id)) {
        console.error("Book is not in the reading list");
        return readingList;
      }
      const _readingList = readingList.filter(
        (readingListBook) => readingListBook.id !== id
      );
      return _readingList;
    });
  }, []);

  return (
    <ReadingListContext.Provider value={{ readingList, addBook, removeBook }}>
      {children}
    </ReadingListContext.Provider>
  );
};

export default ReadingListProvider;
