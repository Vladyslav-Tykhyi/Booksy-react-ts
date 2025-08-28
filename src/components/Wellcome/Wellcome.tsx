import s from "./Wellcome.module.css";

import WellcomeTitle from "./WellcomeTitle/WellcomeTitle";
import WellcomeText from "./WellcomeText/WellcomeText";
import WellcomeImg from "./WellcomeImg/WellcomeImg";

const Wellcome = () => {
  return (
    <div className={s.wellcome_container}>
      <div className={s.wellcome_text_box}>
        <WellcomeTitle />
        <WellcomeText />
      </div>
      <WellcomeImg />
    </div>
  );
};

export default Wellcome;
