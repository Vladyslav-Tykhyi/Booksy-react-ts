import type { HeroTexts } from "../../../services/types";
import s from "./HeroText.module.css";

type HeroTextProps = {
  heroText: HeroTexts;
};

const HeroText: React.FC<HeroTextProps> = ({ heroText }) => {
  return (
    <>
      <p className={s.hero_text}>{heroText}</p>
    </>
  );
};

export default HeroText;
