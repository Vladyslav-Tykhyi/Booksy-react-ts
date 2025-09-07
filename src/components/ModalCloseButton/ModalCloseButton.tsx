import { IoCloseOutline } from "react-icons/io5";
import s from "./ModalCloseButton.module.css";
import type { ModalBTNProps } from "../../services/types";

const ModalCloseButton = ({ onClick }: ModalBTNProps) => {
  return (
    <button onClick={onClick} aria-label="Close modal">
      <IoCloseOutline className={s.closeButton} />
    </button>
  );
};

export default ModalCloseButton;
