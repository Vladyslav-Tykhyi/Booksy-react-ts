import s from "./Modal.module.css";

import { createPortal } from "react-dom";

import type { ModalProps } from "../../services/types";

import clsx from "clsx";
import { useEffect } from "react";
import ModalCloseButton from "../ModalCloseButton/ModalCloseButton";

const Modal = ({
  onClick,
  isOpen,
  userEmailField,
  setUserEmailField,
}: ModalProps) => {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClick();
    }
  };

  const onSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    onClick();
    setUserEmailField({
      name: "",
      email: "",
      message: "",
    });
  };

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClick();
    };
    document.addEventListener("keydown", handleKeyDown);

    const prev = document.body.style.overflow;
    if (isOpen) document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prev;
    };
  }, [isOpen, onClick]);

  const onInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget;
    setUserEmailField((prev) => ({ ...prev, [name]: value }));
  };
  return createPortal(
    <div className={s.backdrop} onClick={handleBackdropClick}>
      <div className={s.modal} role="dialog" aria-modal="true">
        <ModalCloseButton onClick={onClick} />
        <h2 className={s.heading}>Register</h2>
        <p className={s.subText}>Cozy Book Club — "The Midnight Library"</p>
        <form className={s.form} onSubmit={onSubmit}>
          <div className={s.formfield}>
            <label htmlFor="name" className={s.label}>
              Name*
            </label>
            <input
              type="text"
              name="name"
              placeholder="Ann"
              className={s.input}
              required
              autoComplete="name"
              id="name"
              onChange={onInput}
              value={userEmailField?.name}
            />
          </div>
          <div className={s.formfield}>
            <label htmlFor="email" className={s.label}>
              Email*
            </label>
            <input
              type="email"
              name="email"
              placeholder="hello@booksy.com"
              className={s.input}
              required
              autoComplete="email"
              id="email"
              onChange={onInput}
              value={userEmailField?.email}
              pattern="^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"
            />
          </div>
          <div className={s.formfield}>
            <label htmlFor="message" className={s.label}>
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Type your message..."
              className={clsx(s.input, s.textarea)}
              onChange={onInput}
              value={userEmailField?.message}
            />
          </div>
          <button className={s.btn} type="submit" aria-label="Submit modal">
            Register
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
