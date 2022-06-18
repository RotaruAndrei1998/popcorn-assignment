import ReadingListContext from "./ReadingListContext";
import { ReactNode, useCallback, useMemo, useState } from "react";
import { Book } from "../../interfaces";

interface Props {
  children: ReactNode;
}

const ReadingListProvider = ({ children }: Props) => {
  const [readingList, setReadingList] = useState<Array<Book>>([]);

  const addBook = useCallback(
    (book) => {
      if (
        readingList.some((readingListBook) => readingListBook.id === book.id)
      ) {
        console.error("Book is already in the reading list");
        return;
      }
      setReadingList((readingList) => [...readingList, book]);
    },
    [readingList]
  );

  const removeBook = useCallback(
    (id) => {
      if (!readingList.some((readingListBook) => readingListBook.id === id)) {
        console.error("Book is not in the reading list");
        return;
      }
      const _readingList = readingList.filter(
        (readingListBook) => readingListBook.id !== id
      );
      setReadingList(_readingList);
    },
    [readingList]
  );

  const context = useMemo(
    () => ({
      readingList,
      addBook,
      removeBook,
    }),
    [readingList, addBook, removeBook]
  );

  return (
    <ReadingListContext.Provider value={context}>
      {children}
    </ReadingListContext.Provider>
  );
};

export default ReadingListProvider;
