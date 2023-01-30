import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Slider = () => {
  return (
    <Swiper
      className=""
      spaceBetween={5}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="border border-solid border-black">
        Slide 1
      </SwiperSlide>
      <SwiperSlide className="border border-solid border-black">
        Slide 2
      </SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};

export default Slider;
