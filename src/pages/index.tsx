import Head from "next/head";
import { Inter } from "@next/font/google";
import { useState } from "react";
import Slider from "components/Slider";
import Header from "components/Header";
import RandomButton from "components/RandomButton";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [text1, setText1] = useState([
    "Es wäre gut für dein inneres Gleichgewicht, würdest du",
    "Was würde Buddha tun? Buddha würde",
    "Du könntest ernsthaft",
    "Für deine Psychohygiene solltest du",
    "In der Bibel steht, du solltest",
    "Ich finde, du solltest",
    "Dein Unterbewusstsein möchte dir sagen, du solltest",
    "In der Klatschpresse steht, du solltest",
    "Deine große Liebe denkt, du solltest",
    "Als Durchschittsdeutscher solltest du",
    "Wenn es nach Gandhi ginge, würdest du",
    "Du musst",
    "Frei nach Immanuel Kant solltest du",
    "Du solltest öfter",
    "Könntest du bitte",
    "So wie du aussiehst, solltest du",
    "Wenn es nach mir ginge, würdest du",
    "Dein Über-Ich gebietet, du musst",
    "Es würde nicht schaden, würdest du",
    "Jeder Lifecoach würde dir bestätigen, du solltest",
    "Du kannst",
    "In Südchina heißt es, man sollte",
    "Unter Umständen sollte man",
    "Ein*e Lebenskünstler*in wie du sollte",
    "Weil ich dich liebe, solltest du",
    "Wenn du etwas auf dich hältst, solltest du",
    "Dein Therapeut sagt, du solltest",
    "Der Blick nach innen verrät, du solltest",
    "Dein Leben würde sich radikal ändern, würdest du",
    "Dein inneres Kind sagt, du solltest",
    "In jedem guten Ratgeber steht, du solltest",
    "Bei deiner Gesundheit solltest du",
    "Die Energie des Universums wünscht sich, du würdest",
    "Du solltest immer",
    "Hättest du einen Funken Disziplin, würdest du",
    "In deinem Alter solltest du",
    "Ein freier Mensch wie du sollte",
    "Nach Freud solltest du",
    "Du solltest vorzugsweise",
    "Du darfst keinesfalls",
    "Laut jüngsten therapeutischen Erkenntnissen solltest du",
    "Du wärst ein glücklicherer Mensch, würdest du",
    "Du kannst ganz einfach",
    "Gewissenhafte Liebhaber*innen sollten",
    "Mit deiner Vorgeschichte darfst du",
  ]);
  const [text2, setText2] = useState([
    "beruflich und privat",
    "in Zeiten wie diesen",
    "vorm Schlafengehen",
    "in Erotikangelegenheiten",
    "schon mal vorsorglich",
    "vor Sonnenaufgang",
    "am Arbeitsplatz",
    "nur unter Aufsicht",
    "auf keinen Fall",
    "hin und wieder mal",
    "gleich nach dem Aufstehen",
    "zum Erhalt deiner Partnerschaft",
    "beim Rauchen",
    "in der Öffentlichkeit",
    "beim Sex",
    "auf dem Klo",
    "in der Kirche",
    "im Haushalt",
    "auf Reisen",
    "mit Abstand",
    "am Ende deines Lebens",
    "auf jeden Fall",
    "24 / 7",
    "auch wenn es schwerfällt",
    "bei der Partnerwahl",
    "vorsichtig",
    "im Straßenverkehr",
    "mit Bedacht",
    "allen guten Ratschlägen zum Trotz",
    "auch von Rechts wegen",
    "nur im Notfall",
    "lieber heute als morgen",
    "auch mit Rücksicht auf die Umwelt",
    "im Sinne der Kunst",
    "auch in schwachen Momenten",
    "mit bestem Wissen und Gewissen",
    "nicht nur an Weihnachten",
    "bei gutem Wetter",
    "online und offline",
    "mehr als fünf mal in der Woche",
    "ohne Rücksicht auf Verluste",
    "ein Jahr lang",
    "im Großen wie im Kleinen",
    "in Liebesdingen",
    "nicht nur zum Schein",
  ]);
  const [text3, setText3] = useState([
    "mal richtig die Meinung sagen",
    "die Schnauze halten",
    "alles in Frage stellen",
    "auf die Work-Life-Balance achten",
    "dein Schicksal annehmen",
    "einen Verein gründen",
    "die Meinung deiner Mutter hinterfragen",
    "beten",
    "den Müll trennen",
    "gegen den Strom schwimmen",
    "den Teufel an die Wand malen",
    "die Wahrheit sagen",
    "groß denken",
    "fürs Alter vorsorgen",
    "den Gefühlen freien Lauf lassen",
    "Arbeit und Privatleben trennen",
    "klar kommunizieren",
    "deine Traumata anerkennen",
    "Zahnseide benutzen",
    "LSD probieren",
    "niemandem zu nahe treten",
    "mal richtig auf die Kacke hauen",
    "schön grüßen",
    "Haltung zeigen",
    "deinen Arzt oder Apotheker fragen",
    "deine unbewussten Glaubenssätze reflektieren",
    "so bleiben wie du bist",
    "jeden Moment königlich genießen",
    "die Gesundheit im Auge behalten",
    "kleinkariert sein",
    "nur an dich denken",
    "aufbrausend sein",
    "überlegen, was Nietzsche dazu sagen würde",
    "rechtzeitig die Notbremse ziehen",
    "niemandem trauen",
    "die Finger von Alkohol lassen",
    "suaheli lernen",
    "alles richtig mache",
    "deine tiefsten Ängste überwinden",
    "die Konfrontation suchen",
    "Papua-Neuguinea erkunden",
    "alles hinschmeißen",
    "dich deiner Vergangenheit stellen",
    "auf die Tränendrüse drücken",
    "die Familie aus dem Spiel lassen",
  ]);
  return (
    <>
      <Head>
        <title>Tips fürs Leben</title>
        <meta name="description" content="Tips fürs Leben" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* Wrapper */}
        <div className="flex flex-col justify-center items-center min-h-screen w-screen border-green-400 border-solid">
          <Header></Header>
          {/* Flex Container für die Slides */}
          <div className="w-11/12 border-solid border border-slate-400 flex flex-wrap gap-4 items-stretch">
            <Slider color="bg-green-200" text={text1} />
            <Slider color="bg-blue-200" text={text2} />
            <Slider color="bg-red-200" text={text3} />
          </div>
          <RandomButton />
        </div>
      </main>
    </>
  );
}
