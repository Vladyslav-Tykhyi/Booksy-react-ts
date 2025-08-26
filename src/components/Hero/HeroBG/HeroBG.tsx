import s from "./HeroBG.module.css";
import type { BgVariant } from "../../../services/types";

type HeroBGProps = {
  children: React.ReactNode;
  background: BgVariant;
  isTransitioning: boolean;
};

const HeroBG: React.FC<HeroBGProps> = ({ children, background }) => {
  return <div className={s[background]}>{children}</div>;
};

export default HeroBG;
