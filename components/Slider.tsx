import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { EffectCreative } from "swiper";
import "swiper/css";
import "swiper/css/effect-creative";

interface SliderProps {
  color: string;
  text: String[];
}

const Slider = ({ text, color }: SliderProps) => {
  return (
    <Swiper
      modules={[EffectCreative]}
      effect="creative"
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      }}
      spaceBetween={5}
      slidesPerView={1}
      loop={true}
    >
      {text.map((e, i) => (
        <SwiperSlide
          className={`${color} w-full mb-7 flex items-center justify-center text-center text-xl font-semibold rounded-sm`}
          key={i}
        >
          {e}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default Slider;
