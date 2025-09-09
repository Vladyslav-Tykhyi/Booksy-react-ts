import { useQuery } from "@tanstack/react-query";
import {
  fetchTopBooks,
  type Book,
  type BookCategoryProps,
  type BookWithCategory,
} from "../../services/types";
import { useState, useMemo, useEffect } from "react";
import s from "./Books.module.css";
import BookCategory from "./BookCategory/BookCategory";
import BookDisplay from "./BookDisplay/BookDisplay";
import BookModal from "./BookModal/BookModal";

const Books = () => {
  const [isOpenBook, setIsOpenBook] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [visibleCount, setVisibleCount] = useState(8);
  const [startQuery, setStartQuery] = useState(false);
  const [isWaiting, setIsWaiting] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartQuery(true);
      setIsWaiting(false);
    }, 1250);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 1440) {
      setVisibleCount(24);
    }
  }, []);

  const { data, error, isLoading, isError } = useQuery<BookCategoryProps[]>({
    queryKey: ["books"],
    queryFn: fetchTopBooks,
    enabled: startQuery,
  });

  const onBook = (book: Book) => {
    setSelectedBook(book);
    setIsOpenBook(true);
  };

  const loading = isWaiting || isLoading;

  const allBooks: BookWithCategory[] = useMemo(
    () =>
      data
        ? data.flatMap((category) =>
            category.books
              .filter((b) => b.price > 0)
              .map((b) => ({ ...b, list_name: category.list_name }))
          )
        : [],
    [data]
  );

  const [selectedCategory, setSelectedCategory] =
    useState<string>("All categories");

  const filteredBooks = useMemo(() => {
    if (selectedCategory === "All categories") return allBooks;
    return allBooks.filter((b) => b.list_name === selectedCategory);
  }, [allBooks, selectedCategory]);

  const visibleBooks = filteredBooks.slice(0, visibleCount);

  return (
    <div id="books" className={s.books}>
      <div className={s.wrapper}>
        <BookCategory
          books={allBooks}
          filteredBooks={filteredBooks}
          visibleCount={visibleCount}
          onCategorySelect={setSelectedCategory}
          selectedCategory={selectedCategory}
        />

        <BookDisplay
          onClick={onBook}
          data={[{ list_name: selectedCategory, books: visibleBooks }]}
          error={error}
          isLoading={loading}
          isError={isError}
          setVisibleCount={setVisibleCount}
          booksQuantity={filteredBooks.length}
          visibleBooks={visibleBooks.length}
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
