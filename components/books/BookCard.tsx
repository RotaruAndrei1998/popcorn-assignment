import { Book } from "interfaces";

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
          <button onClick={() => removeBook(data.id)}>
            Remove from Reading List
          </button>
        ) : (
          <button onClick={() => addBook(data)}>Add To Reading List</button>
        )}
      </div>
    </div>
    <div>{data.publisher}</div>
    <div>
      {data.authors.map((author) => (
        <span>{author}</span>
      ))}
    </div>
  </div>
);

export default BookCard;
