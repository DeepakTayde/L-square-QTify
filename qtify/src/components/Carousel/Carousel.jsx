import React, { useRef, useState } from "react";
import styles from "./Carousel.module.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import LeftNavButton from "./LeftNavButton";
import RightNavButton from "./RightNavButton";

const Carousel = ({ items, renderItem }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <>
      <div className={styles.carouselNav}>
        <LeftNavButton
          ref={prevRef}
          style={{ visibility: isBeginning ? "hidden" : "visible" }}
        />
        <RightNavButton
          ref={nextRef}
          style={{ visibility: isEnd ? "hidden" : "visible" }}
        />
      </div>

      <Swiper
        slidesPerView={7}
        spaceBetween={30}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        freeMode={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 7,
            spaceBetween: 50,
          },
        }}
      >
        {items.map((item, idx) => (
          <SwiperSlide key={item.id || idx}>{renderItem(item)}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
