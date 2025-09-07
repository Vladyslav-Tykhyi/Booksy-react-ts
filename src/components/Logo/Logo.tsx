import s from "./Logo.module.css";

const Logo = () => {
  return (
    <a href="/" className={s.logo}>
      <img src="/logo/Company_Logo.svg" />
    </a>
  );
};

export default Logo;
