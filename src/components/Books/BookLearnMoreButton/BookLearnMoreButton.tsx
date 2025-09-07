import type { ModalBTNProps } from "../../../services/types";
import s from "./BookLearnMoreButton.module.css";

const BookLearnMoreButton = ({ onClick }: ModalBTNProps) => {
  return (
    <button className={s.booksButton} type="button" onClick={onClick}>
      Learn More
    </button>
  );
};

export default BookLearnMoreButton;
