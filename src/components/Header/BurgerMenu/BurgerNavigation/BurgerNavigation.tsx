import type { Dispatch, SetStateAction } from "react";
import s from "./BurgerNavigation.module.css";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#books", label: "Books" },
  { href: "#feedbacks", label: "Feedbacks" },
  { href: "#events", label: "Events" },
  { href: "#location", label: "Location" },
];

interface BurgerNavProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const BurgerNavigation = ({ setIsOpen }: BurgerNavProps) => {
  return (
    <nav>
      <ul className={s.list}>
        {navItems.map((item) => (
          <li
            key={item.href}
            onClick={() => setIsOpen((prev) => !prev)}
            className={s.list_item}
          >
            <a
              href={item.href}
              className={s.list_item_link}
              rel="noopener noreferrer"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default BurgerNavigation;
