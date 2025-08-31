import s from "./Modal.module.css";

import { IoCloseOutline } from "react-icons/io5";
import { createPortal } from "react-dom";

import type { FooterFormProps } from "../../services/types";

import clsx from "clsx";
import { useEffect } from "react";

const Modal = ({ onClick, isOpen }: FooterFormProps) => {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClick();
    }
  };
  useEffect(() => {
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
  return createPortal(
    <div className={s.backdrop} onClick={handleBackdropClick}>
      <div className={s.modal}>
        <button onClick={onClick} aria-label="Close modal">
          <IoCloseOutline className={s.closeButton} />
        </button>
        <h2 className={s.heading}>Register</h2>
        <p className={s.subText}>Cozy Book Club — "The Midnight Library"</p>
        <form className={s.form}>
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
            />
          </div>
          <div className={s.formfield}>
            <label htmlFor="message" className={s.label}>
              Message
            </label>
            <textarea
              name="message"
              placeholder="Type your message..."
              className={clsx(s.input, s.textarea)}
            />
          </div>
          <button className={s.btn} type="button" aria-label="Submit modal">
            Register
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
