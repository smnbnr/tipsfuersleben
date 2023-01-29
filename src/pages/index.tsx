import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [text1, setText1] = useState();
  const [text2, setText2] = useState();
  const [text3, setText3] = useState();
  return (
    <>
      <Head>
        <title>Tips fürs Leben</title>
        <meta name="description" content="Tips fürs Leben" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <h1 className="bg-red-700">HELLO WORLD!!!!!1</h1>
        </div>
      </main>
    </>
  );
}
