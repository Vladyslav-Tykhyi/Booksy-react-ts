import s from "./FooterForm.module.css";
import FooterFormJoin from "./FooterFormJoin/FooterFormJoin";
import type { FooterFormProps } from "../../../../services/types";

const FooterForm = ({ onClick }: FooterFormProps) => {
  const form = (formData: FormData) => {
    const userEmail = formData.get("email") as string;
    console.log(`UserEmail: ${userEmail}`);
  };

  return (
    <div>
      <FooterFormJoin />
      <form className={s.form} action={form}>
        <input
          type="text"
          name="email"
          className={s.input}
          placeholder="Enter your email*"
          required
        />
        <button
          className={s.form_btn}
          onClick={onClick}
          type="submit"
          aria-label="Open modal"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default FooterForm;
