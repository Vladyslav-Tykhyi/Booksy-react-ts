import { FaLongArrowAltRight } from "react-icons/fa";
import s from "./RightArrow.module.css";

type ArrowProps = {
  changeBg: (direction: "left" | "right") => void;
};

const RightArrow: React.FC<ArrowProps> = ({ changeBg }) => {
  return (
    <button className={s.right_arrow_btn} onClick={() => changeBg("right")}>
      <FaLongArrowAltRight className={s.right_arrow} />
    </button>
  );
};

export default RightArrow;
