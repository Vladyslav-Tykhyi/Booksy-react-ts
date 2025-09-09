import { useState, useEffect } from "react";
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
  const [visibleUsers, setVisibleUsers] = useState(users);

  useEffect(() => {
    const updateUsers = () => {
      if (window.innerWidth < 1440) {
        setVisibleUsers(users.slice(0, 4));
      } else {
        setVisibleUsers(users);
      }
    };

    updateUsers();
    window.addEventListener("resize", updateUsers);
    return () => window.removeEventListener("resize", updateUsers);
  }, []);

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      className={clsx(s.list, s.mySwiper, "mySwiper")}
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
      {visibleUsers.map((u) => (
        <SwiperSlide key={u.id} tag="li" className={s.listItem}>
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
