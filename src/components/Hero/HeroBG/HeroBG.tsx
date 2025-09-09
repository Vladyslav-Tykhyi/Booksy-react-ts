import s from "./HeroBG.module.css";
import type { BgVariant } from "../../../services/types";
import clsx from "clsx";

type HeroBGProps = {
  children: React.ReactNode;
  background: BgVariant;
};

const HeroBG: React.FC<HeroBGProps> = ({ children, background }) => {
  return <div className={clsx(s[background], s.generalBG)}>{children}</div>;
};

export default HeroBG;
