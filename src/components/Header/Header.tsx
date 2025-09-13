import s from "./Header.module.css";
import Logo from "../Logo/Logo";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import { useState } from "react";
import Navigation from "../Navigation/Navigation";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={s.header}>
      <Logo />
      <Navigation />
      <RxHamburgerMenu
        onClick={() => setIsOpen(!isOpen)}
        className={s.burgerMenu}
      />
      {isOpen && <BurgerMenu setIsOpen={setIsOpen} />}
    </header>
  );
};

export default Header;
