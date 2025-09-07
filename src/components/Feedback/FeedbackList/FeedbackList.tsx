import clsx from "clsx";
import users from "./data.json";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SlideNextButton from "./SlideNextButton/SlideNextButton";
import SlidePrevButton from "./SlidePrevButton/SlidePrevButton";
import s from "./FeedbackList.module.css";

const FeedbackList = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={24}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      className={clsx(s.list, s.mySwiper, "mySwiper")}
      tag="ul"
      width={1311}
      height={217}
      autoplay={{
        delay: 7500,
        disableOnInteraction: false,
      }}
    >
      {users.map((u) => (
        <SwiperSlide key={u.id} tag="li" className={clsx(s.listItem)}>
          <p className={s.userText}>{u.text}</p>
          <div className={s.userProfile}>
            <img
              src={u.avatar}
              alt={u.name}
              className={s.userAvatar}
              loading="lazy"
            />
            <div className={s.userDescr}>
              <p className={s.userName}>{u.name}</p>
              <p className={s.userRole}>{u.role}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className={s.buttonBox}>
        <SlidePrevButton />
        <SlideNextButton />
      </div>
    </Swiper>
  );
};

export default FeedbackList;
