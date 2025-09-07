import s from "./Logo.module.css";

const Logo = () => {
  return (
    <a href="/" className={s.logo}>
      <img src='/logo/svg/Company_Logo.svg" alt="Logo Booksy_shop' />
    </a>
  );
};

export default Logo;
