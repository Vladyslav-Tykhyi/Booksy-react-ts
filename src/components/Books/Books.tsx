import { useQuery } from "@tanstack/react-query";
import {
  fetchTopBooks,
  type Book,
  type BookCategoryProps,
} from "../../services/types";
import { useState, useMemo } from "react";
import s from "./Books.module.css";
import BookCategory from "./BookCategory/BookCategory";
import BookDisplay from "./BookDisplay/BookDisplay";
import BookModal from "./BookModal/BookModal";

const Books = () => {
  const [isOpenBook, setIsOpenBook] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [visibleCount, setVisibleCount] = useState(24);
  const { data, error, isLoading, isError } = useQuery<BookCategoryProps[]>({
    queryKey: ["books"],
    queryFn: fetchTopBooks,
  });

  const onBook = (book: Book) => {
    setSelectedBook(book);
    setIsOpenBook(true);
  };

  const allBooks = useMemo(
    () =>
      data
        ? data.flatMap((category) => category.books).filter((b) => b.price > 0)
        : [],
    [data]
  );

  const visibleBooks = allBooks.slice(0, visibleCount);

  return (
    <div id="books" className={s.books}>
      <div className={s.wrapper}>
        <BookCategory books={allBooks} visibleCount={visibleCount} />
        <BookDisplay
          onClick={onBook}
          data={[{ list_name: "All Books", books: visibleBooks }]}
          error={error}
          isLoading={isLoading}
          isError={isError}
          setVisibleCount={setVisibleCount}
        />
      </div>
      {isOpenBook && selectedBook && (
        <BookModal
          onClick={() => setIsOpenBook(false)}
          isOpen={isOpenBook}
          book={selectedBook}
        />
      )}
    </div>
  );
};

export default Books;
