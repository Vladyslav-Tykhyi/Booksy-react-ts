import s from "./FooterNav.module.css";

const FooterNav = () => {
  return (
    <nav>
      <ul className={s.list}>
        <li className={s.list_item}>
          <a
            href="#home"
            className={s.list_item_link}
            rel="noopener noreferrer"
          >
            Home
          </a>
        </li>
        <li className={s.list_item}>
          <a
            href="#books"
            className={s.list_item_link}
            rel="noopener noreferrer"
          >
            Books
          </a>
        </li>
        <li className={s.list_item}>
          <a
            href="#feedbacks"
            className={s.list_item_link}
            rel="noopener noreferrer"
          >
            Feedbacks
          </a>
        </li>
        <li className={s.list_item}>
          <a
            href="#events"
            className={s.list_item_link}
            rel="noopener noreferrer"
          >
            Events
          </a>
        </li>
        <li className={s.list_item}>
          <a
            href="#location"
            className={s.list_item_link}
            rel="noopener noreferrer"
          >
            Location
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
