import s from "./WellcomeImg.module.css";

import img1x from "./img/image_1x.png";
import img2x from "./img/image_2@x.png";

const WellcomeImg = () => {
  return (
    <picture className={s.content_img}>
      <source srcSet={`${img1x} 1x, ${img2x} 2x`} media="(min-width: 1158px)" />
      {/* <source srcSet={`${tab1x} 1x, ${tab2x} 2x`} media="(min-width: 768px)" />
      <source srcSet={`${mob1x} 1x, ${mob2x} 2x`} media="(max-width: 767px)" /> */}
      <img src={img1x} alt="portfolio picture" />
    </picture>
  );
};

export default WellcomeImg;
