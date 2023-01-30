import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface SliderProps {
  color: string;
  text: String[];
}

const Slider = ({ text, color }: SliderProps) => {
  return (
    <Swiper
      spaceBetween={5}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {text.map((e, i) => (
        <SwiperSlide
          className={`${color} w-full mb-7 flex items-center justify-center text-center text-xl font-semibold rounded-`}
          key={i}
        >
          {e}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default Slider;
