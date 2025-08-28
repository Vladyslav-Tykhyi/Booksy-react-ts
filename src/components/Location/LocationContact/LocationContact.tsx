import s from "./LocationContact.module.css";
import { MdOutlineEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";

const LocationContact = () => {
  return (
    <ul className={s.location_list}>
      <li className={s.location_list_item}>
        <MdOutlineEmail aria-hidden className={s.location_icon} />
        <div className={s.location_contact_wrapper}>
          <span className={s.location_item_subtitle}>Email</span>
          <a href="mailto:hello@booksy.com" className={s.location_item_contact}>
            hello@booksy.com
          </a>
        </div>
      </li>
      <li className={s.location_list_item}>
        <LuPhone aria-hidden className={s.location_icon} />
        <div className={s.location_contact_wrapper}>
          <span className={s.location_item_subtitle}>Phone</span>
          <a href="tel:+612413043012" className={s.location_item_contact}>
            +61 (241) 304-3012
          </a>
        </div>
      </li>
      <li className={s.location_list_item}>
        <IoLocationOutline aria-hidden className={s.location_icon} />
        <div className={s.location_contact_wrapper}>
          <span className={s.location_item_subtitle}>Office</span>
          <a
            className={s.location_item_contact}
            href="https://www.google.com/maps/search/?api=1&query=123+Books+St,+Sydney+NSW+2000+AU"
            target="_blank"
            rel="noopener noreferrer"
          >
            123 Books St, Sydney NSW 2000 AU
          </a>
        </div>
      </li>
    </ul>
  );
};

export default LocationContact;
