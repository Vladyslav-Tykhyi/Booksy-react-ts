import type React from "react";
import s from "./Navigation.module.css";

const Navigation: React.FC = () => {
  return (
    <div className={s.nav}>
      <ul className={s.list}>
        <li className={s["list-item"]}>
          <a
            href="#home"
            className={s["list-item-link"]}
            rel="noopener noreferrer"
          >
            Home
          </a>
        </li>
        <li className={s["list-item"]}>
          <a
            href="#books"
            className={s["list-item-link"]}
            rel="noopener noreferrer"
          >
            Books
          </a>
        </li>
        <li className={s["list-item"]}>
          <a
            href="#feedbacks"
            className={s["list-item-link"]}
            rel="noopener noreferrer"
          >
            Feedbacks
          </a>
        </li>
        <li className={s["list-item"]}>
          <a
            href="#events"
            className={s["list-item-link"]}
            rel="noopener noreferrer"
          >
            Events
          </a>
        </li>
        <li className={s["list-item"]}>
          <a
            href="#location"
            className={s["list-item-link"]}
            rel="noopener noreferrer"
          >
            Location
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
