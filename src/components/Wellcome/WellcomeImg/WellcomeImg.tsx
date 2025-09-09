import s from "./WellcomeImg.module.css";

import img1x from "./img/image_1x.png";
import img2x from "./img/image_2@x.png";
import img3x from "./imgPhone/phoneImg.png";
import img4x from "./imgPhone/phoneImg@2x.png";

const WellcomeImg = () => {
  return (
    <picture className={s.content_img}>
      <source srcSet={`${img1x} 1x, ${img2x} 2x`} media="(min-width: 1158px)" />
      <source srcSet={`${img3x} 1x, ${img4x} 2x`} media="(max-width: 1157px)" />
      <img src={img1x} alt="portfolio picture" />
    </picture>
  );
};

export default WellcomeImg;
