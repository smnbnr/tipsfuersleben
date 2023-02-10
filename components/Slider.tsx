import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { EffectCreative } from "swiper";
import "swiper/css";
import "swiper/css/effect-creative";
import { forwardRef, ForwardedRef, SetStateAction, Dispatch } from "react";
import { TbTrashX } from "react-icons/tb";

interface SliderProps {
  color: string;
  text: string[];
  onSetTextArray: Dispatch<SetStateAction<string[]>>;
}

const Slider = forwardRef(
  (
    { text, color, onSetTextArray }: SliderProps,
    ref: ForwardedRef<SwiperRef>
  ) => {
    const handleDelete = (textToDelete: string) => {
      const filteredArray = text.filter((txt) => txt !== textToDelete);

      onSetTextArray(filteredArray);
    };

    return (
      <Swiper
        modules={[EffectCreative]}
        effect="creative"
        ref={ref}
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
        {text.map((txt, i) => (
          <SwiperSlide
            className={`${color} w-full mb-7 flex items-center justify-center text-xl font-semibold rounded-sm`}
            key={i}
          >
            <div className="flex mx-2 w-full justify-between">
              {txt}
              <button onClick={() => handleDelete(txt)}>
                <TbTrashX />
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }
);

Slider.displayName = "Slider";

export default Slider;
