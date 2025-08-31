import { useState } from "react";
import type { BgVariant, HeroTexts } from "../../services/types";
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
const heroTexts: HeroTexts[] = [
  "Get 10% off your first order",
  "Save 15% on some books",
  " Summer Sale! Up to - 40 % discounts",
  "Last chance to buy our spring bestsellers",
];

const Hero = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [heroText, setHeroText] = useState<HeroTexts>(heroTexts[0]);

  const changeBg = (direction: "left" | "right") => {
    setTimeout(() => {
      const nextIndex =
        direction === "left"
          ? (bgIndex - 1 + bgVariants.length) % bgVariants.length
          : (bgIndex + 1) % bgVariants.length;
      setBgIndex(nextIndex);
      setHeroText(heroTexts[nextIndex]);
    }, 200);
  };

  return (
    <div className={s.hero} id="home">
      <HeroBG background={bgVariants[bgIndex]}>
        <HeroText heroText={heroText} />
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
