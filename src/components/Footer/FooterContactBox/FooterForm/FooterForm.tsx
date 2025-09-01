import s from "./FooterForm.module.css";
import FooterFormJoin from "./FooterFormJoin/FooterFormJoin";
import type { FooterFormProps } from "../../../../services/types";

const FooterForm = ({ onClick, userEmail }: FooterFormProps) => {
  const form = (formData: FormData) => {
    const useEmail = formData.get("email") as string;

    userEmail((prev) => ({ ...prev, email: useEmail }));
  };

  return (
    <div>
      <FooterFormJoin />
      <form className={s.form} action={form}>
        <input
          type="text"
          name="email"
          className={s.input}
          placeholder="Enter your email"
          autoComplete="email"
          id="email"
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
