import { useContext } from "react";
import BooksContainer from "components/books/BooksContainer";
import ReadingListContext from "../../contexts/ReadingListContext/ReadingListContext";
import Link from "next/link";

const ReadingListPage = () => {
  const { readingList } = useContext(ReadingListContext);
  return (
    <div className="flex flex-col p-10">
      <Link href="/">
        <button className="w-52 mb-5 bg-indigo-600 border border-transparent rounded-md py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Go to Homepage
        </button>
      </Link>
      <BooksContainer books={readingList} />
    </div>
  );
};

export default ReadingListPage;
