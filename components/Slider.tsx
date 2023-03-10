import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { EffectCreative } from "swiper";
import "swiper/css";
import "swiper/css/effect-creative";
import { forwardRef, ForwardedRef, SetStateAction, Dispatch } from "react";
import { TbTrashX } from "react-icons/tb";

type textEntry = { text: string; type: "initial" | "user" };
interface SliderProps {
  color: string;
  text: textEntry[];
  position: string;
  onSetTextArray: Dispatch<SetStateAction<textEntry[]>>;
}

const Slider = forwardRef(
  (
    { text, color, onSetTextArray, position }: SliderProps,
    ref: ForwardedRef<SwiperRef>
  ) => {
    const handleDelete = (textToDelete: string) => {
      const filteredArray = text.filter((txt) => txt.text !== textToDelete);
      onSetTextArray(filteredArray);
      window.localStorage.setItem(
        `${position}Advices`,
        JSON.stringify(filteredArray)
      );
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
        {text.length === 0 ? (
          <SwiperSlide
            className={`${color} w-full mb-7 pl-2 flex items-center text-xl font-semibold rounded-sm`}
          >
            Füge zuerst einen Ratschlag hinzu...
          </SwiperSlide>
        ) : (
          text.map((txt, i) => (
            <SwiperSlide
              className={`${color} w-full mb-7 flex items-center justify-center text-xl font-semibold rounded-sm`}
              key={i}
            >
              <div className="flex mx-2 w-full justify-between">
                {txt.text}
                <button onClick={() => handleDelete(txt.text)}>
                  <TbTrashX />
                </button>
              </div>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    );
  }
);

Slider.displayName = "Slider";

export default Slider;
