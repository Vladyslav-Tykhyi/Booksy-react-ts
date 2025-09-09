import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";

import "swiper/css/pagination";

import s from "./EventsLits.module.css";
import EventsListImg from "./EventsListImg/EventsListImg";
import EventsListBtn from "./EventsListBtn/EventsListBtn";
import EventsListInfo from "./EventsListInfo/EventsListInfo";

import { eventsData } from "./EventsData";
import type { EventsListProps } from "../../../services/types";

import SlideNextButton from "../../Feedback/FeedbackList/SlideNextButton/SlideNextButton";
import SlidePrevButton from "../../Feedback/FeedbackList/SlidePrevButton/SlidePrevButton";

const EventsList = ({ handleRegister }: EventsListProps) => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      className={clsx(s.list, s.mySwiperEvents, "mySwiperEvents")}
      tag="ul"
      autoplay={{
        disableOnInteraction: false,
        delay: 10000,
      }}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 24,
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      }}
    >
      {eventsData.map(
        ({ id, img1x, img2x, alt, heading, accessibility, text }) => (
          <SwiperSlide key={id} tag="li" className={s.listItem}>
            <EventsListImg img1x={img1x} img2x={img2x} alt={alt} />
            <EventsListInfo
              heading={heading}
              accessibility={accessibility}
              text={text}
            />
            <EventsListBtn handleRegister={handleRegister} />
          </SwiperSlide>
        )
      )}
      <div className={s.buttonBox}>
        <SlidePrevButton />
        <SlideNextButton />
      </div>
    </Swiper>
  );
};

export default EventsList;
