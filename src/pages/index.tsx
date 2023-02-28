import Head from "next/head";
import { Inter } from "@next/font/google";
import { useRef, useState } from "react";
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
  const [showUserFilter, setShowUserFilter] = useState(false);
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

  // const [topAdvices, setTopAdvices] = useState(initialTopAdvices);
  // const [middleAdvices, setMiddleAdvices] = useState(initialMiddleAdvices);
  // const [bottomAdvices, setBottomAdvices] = useState(initialBottomAdvices);

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
  const handleFilter = () => {};

  const filterUser = ({ type }: { type: "user" | "initial" }) =>
    type === "user";

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
        <div className="flex flex-col justify-around items-center  min-h-screen w-full bg-gradient-to-r from-sky-400 to-cyan-300">
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

              <div className="mb-4 w-full flex justify-center">
                <Button text="ZURÜCK" onClick={() => setAddMode(false)} />
              </div>
            </>
          ) : (
            <>
              <div className="w-11/12 flex flex-wrap gap-4 pb-4 items-stretch">
                <Slider
                  ref={sliderTopRef}
                  color="bg-green-200"
                  onSetTextArray={setTopAdvices}
                  text={
                    showUserFilter ? topAdvices.filter(filterUser) : topAdvices
                  }
                />
                <Slider
                  ref={sliderMiddleRef}
                  color="bg-blue-200"
                  onSetTextArray={setMiddleAdvices}
                  text={
                    showUserFilter
                      ? middleAdvices.filter(filterUser)
                      : middleAdvices
                  }
                />
                <Slider
                  ref={sliderBottomRef}
                  color="bg-red-200"
                  onSetTextArray={setBottomAdvices}
                  text={
                    showUserFilter
                      ? bottomAdvices.filter(filterUser)
                      : bottomAdvices
                  }
                />
              </div>
              <div className="w-full flex flex-col items-center justify-center mb-3">
                <Button text="ZUFALLSRATSCHLAG" onClick={handleClick} />
                <Button
                  text="RATSCHLAG HINZUFÜGEN"
                  onClick={() => setAddMode(true)}
                />
                <Button
                  text={
                    showUserFilter ? "ALLE ANZEIGEN" : "NUR EIGENE ANZEIGEN"
                  }
                  onClick={() => setShowUserFilter(!showUserFilter)}
                />
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
}
