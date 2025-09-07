import type { BooksButtonMoreProps } from "../../../services/types";
import s from "./BooksButtonMore.module.css";

const BooksButtonMore = ({ setVisibleCount }: BooksButtonMoreProps) => {
  return (
    <button
      type="button"
      className={s.button}
      onClick={() => {
        setVisibleCount((c) => c + 4);
      }}
    >
      Show More
    </button>
  );
};

export default BooksButtonMore;
