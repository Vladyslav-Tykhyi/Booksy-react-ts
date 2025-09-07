import s from "./BookDisplay.module.css";
import BookLearnMoreButton from "../BookLearnMoreButton/BookLearnMoreButton";
import type { BooksQueryProps } from "../../../services/types";
import BooksButtonMore from "../BooksButtonMore/BooksButtonMore";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";

const BookDisplay = ({
  onClick,
  data,
  error,
  isLoading,
  isError,
  setVisibleCount,
  booksQuantity,
  visibleBooks,
}: BooksQueryProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(visibleBooks < booksQuantity);
  }, [visibleBooks, booksQuantity]);
  if (isLoading) return <Loading />;
  if (isError) return <p>Error: {(error as Error).message}</p>;
  if (!data) return <p>No data</p>;
  return (
    <div>
      <ul className={s.booksList}>
        {data.map((category) =>
          category.books.map(
            (book) =>
              book.price > 0 && (
                <li key={book._id} className={s.booksListItem}>
                  <img
                    src={book.book_image}
                    alt={book.description}
                    className={s.bookImg}
                    loading="lazy"
                  />
                  <div className={s.contentWrapper}>
                    <div className={s.bookDescriptionBox}>
                      <div className={s.bookDescription}>
                        <h3 className={s.booksHeading}>{book.title}</h3>
                        <p className={s.booksAuthor}>{book.author}</p>
                      </div>
                      <p className={s.booksPrice}>{book.price}$</p>
                    </div>
                    <BookLearnMoreButton onClick={() => onClick(book)} />
                  </div>
                </li>
              )
          )
        )}
      </ul>
      {isOpen && <BooksButtonMore setVisibleCount={setVisibleCount} />}
    </div>
  );
};

export default BookDisplay;
