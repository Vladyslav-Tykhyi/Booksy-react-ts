import { useState } from "react";
import type { BgVariant } from "../../services/types";
import HeroBG from "./HeroBG/HeroBG";
import HeroText from "./HeroText/HeroText";
import HeroBTN from "./HeroBTN/HeroBTN";
import HeroSubText from "./HeroSubText/HeroSubText";
import GeneralBTN from "../GeneralBTN/GeneralBTN";
import s from "./Hero.module.css";

const bgVariants: BgVariant[] = [
  "heroBG_v1",
  "heroBG_v2",
  "heroBG_v3",
  "heroBG_v4",
];

const Hero = () => {
  const [bgIndex, setBgIndex] = useState(0);

  const changeBg = (direction: "left" | "right") => {
    setBgIndex((prev) => {
      if (direction === "left") {
        return (prev - 1 + bgVariants.length) % bgVariants.length;
      } else {
        return (prev + 1) % bgVariants.length;
      }
    });
  };

  return (
    <div className={s.hero}>
      <HeroBG background={bgVariants[bgIndex]}>
        <HeroText />
        <HeroBTN />
      </HeroBG>
      <div className={s.hero_container}>
        <HeroSubText />
        <GeneralBTN changeBg={changeBg} />
      </div>
    </div>
  );
};

export default Hero;
