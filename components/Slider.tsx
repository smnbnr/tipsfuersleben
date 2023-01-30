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
          className={`${color} text-center text-xl font-semibold rounded-md flex items-center justify-center border border-black`}
          key={i}
        >
          {e}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default Slider;
