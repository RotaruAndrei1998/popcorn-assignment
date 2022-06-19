import { Book } from "interfaces";
import { memo } from "react";

type Props = {
  data: Book;
  isInReadingList: boolean;
  addBook: Function;
  removeBook: Function;
};

const BookCard = ({ data, isInReadingList, addBook, removeBook }: Props) => (
  <div
    key={data.id}
    className="flex flex-col border-gray-500 border shadow-2xl p-5 mt-5"
  >
    <div className="flex justify-between">
      <div>{data.title}</div>
      <div>
        {isInReadingList ? (
          <button
            onClick={() => removeBook(data.id)}
            className="bg-indigo-600 border border-transparent rounded-md py-1 px-5 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-red-500"
          >
            Remove from Reading List
          </button>
        ) : (
          <button
            onClick={() => addBook(data)}
            className="bg-indigo-600 border border-transparent rounded-md py-1 px-5 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-red-500"
          >
            Add To Reading List
          </button>
        )}
      </div>
    </div>
    <div>{data.publisher}</div>
    <div>
      {data.authors.map((author) => (
        <span key={author}>{author}</span>
      ))}
    </div>
  </div>
);

export default memo(BookCard);
