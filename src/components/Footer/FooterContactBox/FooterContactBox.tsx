import Logo from "../../Logo/Logo";
import s from "./FooterContactBox.module.css";
import FooterForm from "./FooterForm/FooterForm";
import FooterNav from "./FooterNav/FooterNav";

import type { FooterFormProps } from "../../../services/types";

const FooterContactBox = ({ onClick, userEmail }: FooterFormProps) => {
  return (
    <div className={s.footer_contact_box}>
      <div className={s.footer_nav_box}>
        <div className={s.footer_logo}>
          <Logo />
        </div>
        <FooterNav />
      </div>
      <FooterForm onClick={onClick} userEmail={userEmail} />
    </div>
  );
};

export default FooterContactBox;
