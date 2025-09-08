import s from "./BookCategory.module.css";
import { type BookWithCategory } from "../../../services/types";

interface BookCategoryProps {
  books: BookWithCategory[];
  filteredBooks: BookWithCategory[];
  visibleCount: number;
  onCategorySelect: (category: string) => void;
  selectedCategory: string;
}

const BookCategory = ({
  books,
  filteredBooks,
  visibleCount,
  onCategorySelect,
  selectedCategory,
}: BookCategoryProps) => {
  const categories = [
    "All categories",
    ...new Set(books.map((b) => b.list_name)),
  ];

  return (
    <div className={s.BookCategory}>
      <div className={s.booksBox}>
        <h2 className={s.heading}>Books</h2>
        <p>
          Showing {Math.min(visibleCount, filteredBooks.length)} of{" "}
          {filteredBooks.length}
        </p>
      </div>

      {/* Desktop */}
      <ul className={(s.desktopList, s.sidebar)}>
        {categories.map((cat) => (
          <li
            key={cat}
            className={`${s.item} ${selectedCategory === cat ? s.active : ""}`}
            onClick={() => onCategorySelect(cat)}
          >
            {cat}
          </li>
        ))}
      </ul>

      {/* Mobile */}
      <select
        className={s.mobileSelect}
        value={selectedCategory}
        onChange={(e) => onCategorySelect(e.target.value)}
      >
        {categories.map((cat) => (
          <option key={cat}>{cat}</option>
        ))}
      </select>
    </div>
  );
};

export default BookCategory;
