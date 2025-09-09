import s from "./Modal.module.css";
import { createPortal } from "react-dom";
import { useEffect } from "react";
import clsx from "clsx";

import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import ModalCloseButton from "../ModalCloseButton/ModalCloseButton";
import type { ModalProps, EmailData } from "../../services/types";

const modalSchema: yup.ObjectSchema<EmailData> = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email"),
  message: yup.string().max(500, "Message can't exceed 500 characters"),
});

const Modal = ({
  onClick,
  isOpen,
  userEmailField,
  setUserEmailField,
}: ModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EmailData>({
    resolver: yupResolver(modalSchema),
    defaultValues: userEmailField,
  });

  const onSubmit: SubmitHandler<EmailData> = (data) => {
    setUserEmailField(data);
    onClick();
    reset({ message: "", name: "", email: "" });
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

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClick();
    }
  };

  return createPortal(
    <div className={s.backdrop} onClick={handleBackdropClick}>
      <div className={s.modal} role="dialog" aria-modal="true">
        <ModalCloseButton onClick={onClick} />
        <h2 className={s.heading}>Register</h2>
        <p className={s.subText}>Cozy Book Club — "The Midnight Library"</p>

        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div className={s.formfield}>
            <label htmlFor="name" className={s.label}>
              Name*
            </label>
            <input
              type="text"
              id="name"
              placeholder="Ann"
              className={s.input}
              {...register("name")}
            />
            {errors.name && (
              <div className={s.error}>{errors.name.message}</div>
            )}
          </div>

          {/* Email */}
          <div className={s.formfield}>
            <label htmlFor="email" className={s.label}>
              Email*
            </label>
            <input
              type="email"
              id="email"
              placeholder="hello@booksy.com"
              className={s.input}
              {...register("email")}
            />
            {errors.email && (
              <div className={s.error}>{errors.email.message}</div>
            )}
          </div>

          {/* Message */}
          <div className={s.formfield}>
            <label htmlFor="message" className={s.label}>
              Message
            </label>
            <textarea
              id="message"
              placeholder="Type your message..."
              className={clsx(s.input, s.textarea)}
              {...register("message")}
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
