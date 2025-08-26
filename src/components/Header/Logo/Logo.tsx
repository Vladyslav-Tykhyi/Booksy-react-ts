import s from "./Logo.module.css";

const Logo = () => {
  return (
    <>
      <a href="/index.html">
        <img
          className={s.logo}
          src="/src/img/svg/Company_Logo.svg"
          alt="Logo Booksy_shop"
        />
      </a>
    </>
  );
};

export default Logo;
