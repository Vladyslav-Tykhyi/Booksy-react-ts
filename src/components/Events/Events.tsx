import type { EventsListProps } from "../../services/types";
import s from "./Events.module.css";
import EventsContentBox from "./EventsContentBox/EventsContentBox";
import EventsHeading from "./EventsHeading.tsx/EventsHeading";
import EventsList from "./EventsList/EventsList";

const Events: React.FC<EventsListProps> = ({ handleRegister }) => {
  return (
    <div className={s.eventsContainer} id="events">
      <EventsHeading />
      <EventsContentBox />
      <EventsList handleRegister={handleRegister} />
    </div>
  );
};

export default Events;
