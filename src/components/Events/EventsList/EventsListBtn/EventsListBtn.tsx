import type { EventsListProps } from "../../../../services/types";
import s from "./EventsListBtn.module.css";
import { MdKeyboardArrowRight } from "react-icons/md";

const EventsListBtn: React.FC<EventsListProps> = ({ handleRegister }) => {
  return (
    <button className={s.btn} onClick={handleRegister}>
      <span className={s.btnText}>Register</span>
      <MdKeyboardArrowRight className={s.arrow} />
    </button>
  );
};

export default EventsListBtn;
