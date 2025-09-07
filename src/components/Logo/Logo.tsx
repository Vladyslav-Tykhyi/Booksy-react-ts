import s from "./Logo.module.css";

const Logo = () => {
  return (
    <a href="/" className={s.logo}>
      <img src="/public/logo/svg" alt="Logo Booksy_shop" />
    </a>
  );
};

export default Logo;
