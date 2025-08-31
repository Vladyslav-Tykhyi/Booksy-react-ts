import s from "./Logo.module.css";

const Logo = () => {
  return (
    <a href="/index.html" className={s.logo}>
      <img src="/src/img/svg/Company_Logo.svg" alt="Logo Booksy_shop" />
    </a>
  );
};

export default Logo;
