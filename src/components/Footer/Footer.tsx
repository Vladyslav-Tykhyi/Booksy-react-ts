import AllRights from "./AllRights/AllRights";
import s from "./Footer.module.css";
import FooterContactBox from "./FooterContactBox/FooterContactBox";

import type { FooterFormProps } from "../../services/types";

const Footer = ({ onClick, userEmail }: FooterFormProps) => {
  return (
    <footer className={s.footer}>
      <FooterContactBox onClick={onClick} userEmail={userEmail} />
      <AllRights />
    </footer>
  );
};

export default Footer;
