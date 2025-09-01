import s from "./EventsListInfo.module.css";

interface ListInfoProps {
  heading: string;
  accessibility: string;
  text: string;
}

const EventsListInfo = ({ heading, accessibility, text }: ListInfoProps) => {
  return (
    <>
      <h3 className={s.heading}>{heading}</h3>
      <p className={s.accessibility}>{accessibility}</p>
      <p className={s.text}>{text}</p>
    </>
  );
};

export default EventsListInfo;
