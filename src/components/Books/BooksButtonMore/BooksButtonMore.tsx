import s from "./BooksButtonMore.module.css";

interface BooksButtonMoreProps {
  setVisibleCount: React.Dispatch<React.SetStateAction<number>>;
}

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
