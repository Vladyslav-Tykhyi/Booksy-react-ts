import { FaLongArrowAltLeft } from "react-icons/fa";
import s from "./SlidePrevButton.module.css";
import { useSwiper } from "swiper/react";

const SlidePrevButton = () => {
  const swiper = useSwiper();
  return (
    <button onClick={() => swiper.slidePrev()} className={s.left_arrow_btn}>
      <FaLongArrowAltLeft className={s.left_arrow} />
    </button>
  );
};

export default SlidePrevButton;
