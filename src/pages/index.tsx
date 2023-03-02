import Head from "next/head";
import { Inter } from "@next/font/google";
import { useRef, useState, useEffect } from "react";
import Slider from "components/Slider";
import { SwiperRef } from "swiper/react";
import Header from "components/Header";
import Button from "components/Button";
import {
  initialBottomAdvices,
  initialMiddleAdvices,
  initialTopAdvices,
} from "@/assets/advices";
import Form from "components/Form";

export default function Home() {
  const [showUserAdvices, setShowUserAdvices] = useState(false);
  type textEntry = { text: string; type: "initial" | "user" };

  const [topAdvices, setTopAdvices] = useState<textEntry[]>(
    initialTopAdvices.map((advice) => ({
      text: advice,
      type: "initial",
    }))
  );

  const [middleAdvices, setMiddleAdvices] = useState<textEntry[]>(
    initialMiddleAdvices.map((advice) => ({
      text: advice,
      type: "initial",
    }))
  );
  const [bottomAdvices, setBottomAdvices] = useState<textEntry[]>(
    initialBottomAdvices.map((advice) => ({
      text: advice,
      type: "initial",
    }))
  );

  const [addMode, setAddMode] = useState(false);

  const sliderTopRef = useRef<SwiperRef>(null);
  const sliderMiddleRef = useRef<SwiperRef>(null);
  const sliderBottomRef = useRef<SwiperRef>(null);

  const randomNumber = (adviceArray: any[]): number =>
    Math.floor(Math.random() * adviceArray.length);

  const handleClick = () => {
    sliderTopRef?.current?.swiper?.slideTo(randomNumber(topAdvices));
    sliderMiddleRef?.current?.swiper?.slideTo(randomNumber(middleAdvices));
    sliderBottomRef?.current?.swiper?.slideTo(randomNumber(bottomAdvices));
  };

  const filterUserAdvice = ({ type }: { type: "user" | "initial" }) =>
    type === "user";

  //----------------LOCALSTORAGE TO BE CONTINUED-----------//
  // useEffect(() => {
  //   if (!window.localStorage.getItem("topAdvices")) {
  //     window.localStorage.setItem("topAdvices", JSON.stringify(topAdvices));
  //     window.localStorage.setItem(
  //       "middleAdvices",
  //       JSON.stringify(middleAdvices)
  //     );
  //     window.localStorage.setItem(
  //       "bottomAdvices",
  //       JSON.stringify(bottomAdvices)
  //     );
  //   }
  // }, []);

  // useEffect(() => {
  //   const storedTopAdvices = window.localStorage.getItem("topAdvices");
  //   if (storedTopAdvices) {
  //     setTopAdvices(JSON.parse(storedTopAdvices));
  //   }
  //   const storedMiddleAdvices = window.localStorage.getItem("middleAdvices");
  //   if (storedMiddleAdvices) {
  //     setMiddleAdvices(JSON.parse(storedMiddleAdvices));
  //   }
  //   const storedBottomAdvices = window.localStorage.getItem("bottomAdvices");
  //   if (storedBottomAdvices) {
  //     setBottomAdvices(JSON.parse(storedBottomAdvices));
  //   }
  // }, []);

  return (
    <>
      <Head>
        <title>Tipps Umsonst</title>
        <meta name="description" content="Tips fürs Leben" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* Wrapper */}
        <div className="flex flex-col justify-around items-center min-h-screen w-full bg-gradient-to-r from-sky-400 to-cyan-300">
          <Header />
          {/* Flex Container für die Slides */}
          {addMode ? (
            <>
              <Form
                topAdvices={topAdvices}
                middleAdvices={middleAdvices}
                bottomAdvices={bottomAdvices}
                onSetTopAdvices={setTopAdvices}
                onSetMiddleAdvices={setMiddleAdvices}
                onSetBottomAdvices={setBottomAdvices}
              />

              <div className="mb-4 w-11/12 md:w-2/4 flex justify-center font-bold">
                <Button text="ZURÜCK" onClick={() => setAddMode(false)} />
              </div>
            </>
          ) : (
            <>
              <div className="w-11/12 md:w-2/4 flex flex-wrap gap-4 pb-4 items-stretch">
                <Slider
                  ref={sliderTopRef}
                  color="bg-green-200"
                  onSetTextArray={setTopAdvices}
                  position="top"
                  text={
                    showUserAdvices
                      ? topAdvices.filter(filterUserAdvice)
                      : topAdvices
                  }
                />
                <Slider
                  ref={sliderMiddleRef}
                  color="bg-blue-200"
                  onSetTextArray={setMiddleAdvices}
                  position="middle"
                  text={
                    showUserAdvices
                      ? middleAdvices.filter(filterUserAdvice)
                      : middleAdvices
                  }
                />
                <Slider
                  ref={sliderBottomRef}
                  color="bg-red-200"
                  onSetTextArray={setBottomAdvices}
                  position="bottom"
                  text={
                    showUserAdvices
                      ? bottomAdvices.filter(filterUserAdvice)
                      : bottomAdvices
                  }
                />
              </div>
              <div className="w-11/12 md:w-2/4 flex flex-col items-center justify-center mb-3">
                <Button text="ZUFALLSRATSCHLAG" onClick={handleClick} />
                <Button
                  text="RATSCHLAG HINZUFÜGEN"
                  onClick={() => setAddMode(true)}
                />
                <Button
                  text={
                    showUserAdvices ? "ALLE ANZEIGEN" : "NUR EIGENE ANZEIGEN"
                  }
                  onClick={() => setShowUserAdvices(!showUserAdvices)}
                />
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
}
