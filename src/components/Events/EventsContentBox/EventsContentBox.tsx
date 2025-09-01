import s from "./EventContentBox.module.css";

const EventsContentBox = () => {
  return (
    <div className={s.wrapper}>
      <h3 className={s.heading}>Upcoming Events at Booksy</h3>
      <p className={s.text}>
        Discover readings, workshops, and bookish gatherings — online and
        offline. Everyone's welcome.
      </p>
    </div>
  );
};

export default EventsContentBox;
