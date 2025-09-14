import s from "./BookCategory.module.css";
import { type BookWithCategory } from "../../../services/types";
import clsx from "clsx";
import { useState } from "react";

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

  const [open, setOpen] = useState(false);

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
      <ul className={clsx(s.desktopList, s.sidebar)}>
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

      <button className={s.customSelect} onClick={() => setOpen(!open)}>
        {selectedCategory || "Select your category"}
      </button>
      {open && (
        <ul className={s.customSelectList}>
          {categories.map((cat) => (
            <li
              className={s.customSelectItem}
              key={cat}
              onClick={() => {
                onCategorySelect(cat);
                setOpen(false);
              }}
            >
              {cat}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookCategory;
