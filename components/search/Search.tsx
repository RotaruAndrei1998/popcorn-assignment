import { useEffect, useRef, useState } from "react";

interface Props {
  setBooks: Function;
}

const Search = ({ setBooks }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef<HTMLInputElement>();

  const fetchBooks = async () => {
    const query = searchRef.current.value;
    if (!query) {
      setBooks([]);
      return;
    }
    setIsLoading(true);
    try {
      const res = await fetch(`/api/books?q=${query}`);
      const data = await res.json();
      setIsLoading(false);
      const items = data.items;
      if (!Array.isArray(items)) {
        setBooks([]);
        return;
      }
      setBooks(
        items.map((item) => ({
          id: item.id,
          authors: Array.isArray(item.volumeInfo.authors)
            ? item.volumeInfo.authors
            : [],
          publisher: item.volumeInfo.publisher,
          title: item.volumeInfo.title,
        }))
      );
    } catch (err: any) {
      console.error(err);
      setIsLoading(false);
      setBooks([]);
    }
  };

  useEffect(() => {
    const handleEnter = (e) => {
      if (e.key === "Enter" || e.key === 13) {
        fetchBooks();
      }
    };
    let searchRefValue = searchRef.current;
    searchRefValue.addEventListener("keypress", handleEnter);
    return () => searchRefValue.removeEventListener("keypress", handleEnter);
  }, []);

  return (
    <div>
      <label
        htmlFor="search"
        className="block text-sm font-medium text-gray-700"
      >
        Search for a book name
      </label>
      <div className="mt-1 relative rounded-md shadow-sm flex ">
        <input
          ref={searchRef}
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md"
          name="search"
          placeholder="Search for a book name"
        />
        <button
          className="bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-red-500"
          onClick={fetchBooks}
          disabled={isLoading}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
