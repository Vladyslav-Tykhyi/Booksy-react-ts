import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AiOutlineMinus } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import * as Accordion from "@radix-ui/react-accordion";
import clsx from "clsx";

import type { BookModalProps } from "../../../services/types";
import s from "./BookModal.module.css";
import ModalCloseButton from "../../ModalCloseButton/ModalCloseButton";
import toast from "react-hot-toast";

const BookModal = ({ onClick, isOpen, book }: BookModalProps) => {
  const [count, setCount] = useState<number>(1);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClick();
  };

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClick();
    };
    document.addEventListener("keydown", handleKeyDown);

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prev;
    };
  }, [isOpen, onClick]);

  const onPlus = () => {
    setCount((c) => c + 1);
  };

  const onMinus = () => {
    setCount((c) => (c > 1 ? c - 1 : c));
  };

  const totalPrice = (book.price * count).toFixed(2);

  // !!hot-roast

  function addBooks() {
    toast.success(`You have successfully added ${count} books to your cart!`);
  }
  function buyBooks() {
    toast.error("You are unable to order books. We are working on this.");
  }

  return createPortal(
    <div className={s.backdrop} onClick={handleBackdropClick}>
      <div className={s.modal}>
        <ModalCloseButton onClick={onClick} />
        <div className={s.container}>
          <picture className={s.img}>
            <img src={book.book_image} alt={book.title} loading="lazy" />
          </picture>

          <div className={s.bookDescription}>
            <h3 className={s.bookNaming}>{book.title}</h3>
            <p className={s.bookAuthor}>{book.author}</p>
            <p className={s.bookPrice}>${totalPrice}</p>
            <div className={s.bookQuantityBox}>
              <ul className={s.bookQuantitSelector}>
                <li className={s.bookStepper} onClick={onMinus}>
                  <AiOutlineMinus />
                </li>
                <li className={s.bookQuantity}>{count}</li>
                <li className={s.bookStepper} onClick={onPlus}>
                  <GoPlus />
                </li>
              </ul>

              <ul className={s.bookListButtons}>
                <li className={s.bookButtonItem}>
                  <button
                    onClick={addBooks}
                    type="button"
                    className={clsx(s.bookGeneralButton, s.bookAddButton)}
                  >
                    Add To Cart
                  </button>
                </li>
                <li className={s.bookButtonItem}>
                  <button
                    type="button"
                    className={clsx(s.bookGeneralButton, s.bookBuyButton)}
                    onClick={buyBooks}
                  >
                    Buy Now
                  </button>
                </li>
              </ul>
            </div>
            <Accordion.Root type="multiple" className={s.accordion}>
              <Accordion.Item value="item-1">
                <Accordion.Trigger className={s.AccordionTrigger}>
                  <h4 className={s.accordionHeading}>Details</h4>
                  <ChevronDownIcon className={s.AccordionChevron} aria-hidden />
                </Accordion.Trigger>
                <Accordion.Content className={s.AccordionContent}>
                  I Will Find You is a gripping thriller by the master of
                  suspense, Harlan Coben. The story follows David Burroughs, a
                  former prisoner wrongfully convicted of murdering his own son.
                  When he discovers a clue suggesting his son might still be
                  alive, David escapes from prison to uncover the truth.
                  Fast-paced, emotional, and full of unexpected twists — this
                  novel will keep you hooked until the very last page.
                </Accordion.Content>
              </Accordion.Item>
              <Accordion.Item value="item-2">
                <Accordion.Trigger className={s.AccordionTrigger}>
                  <h4 className={s.accordionHeading}>Shipping</h4>
                  <ChevronDownIcon className={s.AccordionChevron} aria-hidden />
                </Accordion.Trigger>
                <Accordion.Content className={s.AccordionContent}>
                  We ship across the United States within 2-5 business days. All
                  orders are processed through USPS or a reliable courier
                  service. Enjoy free standard shipping on orders over $50.
                </Accordion.Content>
              </Accordion.Item>
              <Accordion.Item value="item-3">
                <Accordion.Trigger className={s.AccordionTrigger}>
                  <h4 className={s.accordionHeading}>Returns</h4>
                  <ChevronDownIcon className={s.AccordionChevron} aria-hidden />
                </Accordion.Trigger>
                <Accordion.Content className={s.AccordionContent}>
                  You can return an item within 14 days of receiving your order,
                  provided it hasn't been used and is in its original condition.
                  To start a return, please contact our support team — we'll
                  guide you through the process quickly and hassle-free.
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default BookModal;
