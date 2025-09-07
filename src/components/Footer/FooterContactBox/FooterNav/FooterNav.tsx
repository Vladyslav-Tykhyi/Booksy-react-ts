import s from "./FooterNav.module.css";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#books", label: "Books" },
  { href: "#feedbacks", label: "Feedbacks" },
  { href: "#events", label: "Events" },
  { href: "#location", label: "Location" },
];

const FooterNav = () => {
  return (
    <nav>
      <ul className={s.list}>
        {navItems.map((item) => (
          <li key={item.href} className={s.list_item}>
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

export default FooterNav;
