import s from "./GeneralBTN.module.css";
import LeftArrow from "./LeftArrow/LeftArrow";
import RightArrow from "./RightArrow/RightArrow";

type GeneralBTNProps = {
  changeBg: (direction: "left" | "right") => void;
};

const GeneralBTN: React.FC<GeneralBTNProps> = ({ changeBg }) => {
  return (
    <div className={s.GeneralBTN_box}>
      <LeftArrow changeBg={changeBg} />
      <RightArrow changeBg={changeBg} />
    </div>
  );
};

export default GeneralBTN;
