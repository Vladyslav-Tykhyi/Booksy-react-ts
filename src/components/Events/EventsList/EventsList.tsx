import s from "./EventsLits.module.css";
import EventsListImg from "./EventsListImg/EventsListImg";
import EventsListBtn from "./EventsListBtn/EventsListBtn";
import EventsListInfo from "./EventsListInfo/EventsListInfo";

import { eventsData } from "./EventsData";
import type { EventsListProps } from "../../../services/types";

const EventsList: React.FC<EventsListProps> = ({ handleRegister }) => {
  return (
    <div>
      <ul className={s.list}>
        {eventsData.map(
          ({ id, img1x, img2x, alt, heading, accessibility, text }) => (
            <li key={id} className={s.listItem}>
              <EventsListImg img1x={img1x} img2x={img2x} alt={alt} />
              <EventsListInfo
                heading={heading}
                accessibility={accessibility}
                text={text}
              />
              <EventsListBtn handleRegister={handleRegister} />
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default EventsList;
