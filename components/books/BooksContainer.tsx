import { Book } from "interfaces";
import BookCard from "./BookCard";
import { useContext } from "react";
import ReadingListContext from "../../contexts/ReadingListContext/ReadingListContext";

type Props = {
  books: Book[];
};

const BooksContainer = ({ books }: Props) => {
  const { readingList, addBook, removeBook } = useContext(ReadingListContext);

  const isBookInReadingList = (id) =>
    readingList.some((readingListBook) => readingListBook.id === id);

  if(!books || books?.length === 0) {
    return <div>No books</div>
  }


  return (
    <div>
      {books.map((item) => (
        <BookCard
          data={item}
          isInReadingList={isBookInReadingList(item.id)}
          addBook={addBook}
          removeBook={removeBook}
        />
      ))}
    </div>
  );
};

export default BooksContainer;
