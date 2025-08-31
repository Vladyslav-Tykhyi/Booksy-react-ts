import AllRights from "./AllRights/AllRights";
import s from "./Footer.module.css";
import FooterContactBox from "./FooterContactBox/FooterContactBox";

import type { FooterFormProps } from "../../services/types";

const Footer = ({ onClick }: FooterFormProps) => {
  return (
    <footer className={s.footer}>
      <FooterContactBox onClick={onClick} />
      <AllRights />
    </footer>
  );
};

export default Footer;
