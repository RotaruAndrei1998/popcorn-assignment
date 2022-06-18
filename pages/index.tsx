import { useState } from "react";
import BooksContainer from "components/books/BooksContainer";
import { Book } from "interfaces";
import Search from "components/search/Search";
import Link from "next/link";

const IndexPage = () => {
  const [books, setBooks] = useState<Array<Book>>([]);

  return (
    <div className="flex flex-col p-10">
      <Link href="/readingList">
        <button className="w-52 mb-5 bg-indigo-600 border border-transparent rounded-md py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Go to Reading List
        </button>
      </Link>
      <Search setBooks={setBooks} />
      <div className="text-3xl mt-10">Books search result:</div>
      <BooksContainer books={books} />
    </div>
  );
};

export default IndexPage;
