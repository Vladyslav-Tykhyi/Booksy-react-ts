import type { Book } from "../../../services/types";
import s from "./BookCategory.module.css";

export interface BoosCategoryProps {
  books: Book[];
  visibleCount: number;
}

const categories = [
  "All categories",
  "Combined Print and E-book Fiction",
  "Combined Print & E-book Nonfiction",
  "Hardcover fiction",
  "Paperback trade fiction",
  "Paperback nonfiction",
  "Advice, how-to & Miscellaneous",
  "Children’s middle grade hardcover",
];

const BookCategory = ({ books, visibleCount }: BoosCategoryProps) => {
  return (
    <div className={s.BookCategory}>
      <div className={s.booksBox}>
        <h2 className={s.heading}>Books</h2>
        <p>
          Showing {visibleCount} of {books.length}
        </p>
      </div>
      {/* Desktop */}
      <ul className={s.desktopList}>
        {categories.map((cat) => (
          <li key={cat} className={s.item}>
            {cat}
          </li>
        ))}
      </ul>

      {/* Mobile */}
      <select className={s.mobileSelect}>
        {categories.map((cat) => (
          <option key={cat}>{cat}</option>
        ))}
      </select>
    </div>
  );
};

export default BookCategory;
