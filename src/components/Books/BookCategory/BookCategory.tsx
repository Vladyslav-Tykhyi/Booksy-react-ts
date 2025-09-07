import type { Book } from "../../../services/types";
import s from "./BookCategory.module.css";

export interface BoosCategoryProps {
  books: Book[];
  visibleCount: number;
}

const BookCategory = ({ books, visibleCount }: BoosCategoryProps) => {
  return (
    <div className={s.BookCategory}>
      <div className={s.booksBox}>
        <h2 className={s.heading}>Books</h2>
        <p>
          Showing {visibleCount} of {books.length}
        </p>
      </div>
    </div>
  );
};

export default BookCategory;
