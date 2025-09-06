import { useSwiper } from "swiper/react";
import s from "./SlideNextButton.module.css";
import { FaLongArrowAltRight } from "react-icons/fa";

function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slideNext()} className={s.right_arrow_btn}>
      <FaLongArrowAltRight className={s.right_arrow} />
    </button>
  );
}

export default SlideNextButton;
