import { FaLongArrowAltLeft } from "react-icons/fa";
import s from "./LeftArrow.module.css";

type ArrowProps = {
  changeBg: (direction: "left" | "right") => void;
};

const LeftArrow: React.FC<ArrowProps> = ({ changeBg }) => {
  return (
    <button className={s.left_arrow_btn} onClick={() => changeBg("left")}>
      <FaLongArrowAltLeft className={s.left_arrow} />
    </button>
  );
};

export default LeftArrow;
