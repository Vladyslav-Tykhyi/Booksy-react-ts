import type React from "react";
import s from "./Navigation.module.css";

type NavLink = {
  href: string;
  label: string;
};

const links: NavLink[] = [
  { href: "#home", label: "Home" },
  { href: "#books", label: "Books" },
  { href: "#feedbacks", label: "Feedbacks" },
  { href: "#events", label: "Events" },
  { href: "#location", label: "Location" },
];

const Navigation: React.FC = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        {links.map(({ href, label }) => (
          <li key={href} className={s.list_item}>
            <a
              href={href}
              className={s.list_item_link}
              rel="noopener noreferrer"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
