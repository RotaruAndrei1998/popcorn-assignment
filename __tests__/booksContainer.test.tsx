import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Book } from "interfaces";
import BooksContainer from "components/books/BooksContainer";

const mockBooks: Array<Book> = [
  {
    id: "9fQ2AQAAIAAJ",
    authors: ["Stacy C. Hollander"],
    publisher: "Studio Books",
    title: "Harry Lieberman",
  },
  {
    id: "V0NCAAAAIAAJ",
    authors: ["Robert E. McClure"],
    title: "Harry Pickering",
  },
  {
    id: "SiJQAQAAIAAJ",
    authors: ["Harry Bertoia", "Allentown Art Museum"],
    title: "Harry Bertoia",
  },
  {
    id: "kyghAQAAMAAJ",
    authors: ["Ideals Publications Incorporated"],
    publisher: "Ideals Publications",
    title: "Harry S. Truman",
  },
  {
    id: "eXuyAAAAIAAJ",
    authors: ["Noel Bertram Gerson"],
    title: "Light-Horse Harry",
  },
];
test("renders a message", () => {
  const { container, getByText } = render(<BooksContainer books={mockBooks} />);
  expect(getByText("Harry Lieberman")).toBeInTheDocument();
  expect(getByText("Ideals Publications Incorporated")).toBeInTheDocument();
  expect(getByText("Light-Horse Harry")).toBeInTheDocument();
  expect(getByText("Studio Books")).toBeInTheDocument();
});
