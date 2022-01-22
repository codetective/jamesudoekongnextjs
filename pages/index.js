import Head from "next/head";
import Header from "../components/header/Header";
import About from "../components/homepage/About";
import Focus from "../components/homepage/Focus";
import HowToHelp from "../components/homepage/HowToHelp";
import IntroSection from "../components/homepage/IntroSection";
import MissionVision from "../components/homepage/MissionVision";
import Stats from "../components/homepage/Stats";
import Testimony from "../components/homepage/Testimony";

export default function Home() {
  return (
    <>
      <Head>
        <title>James Udoekong Trust Fund</title>
        <meta
          name="description"
          content="The James Udoekong Education Trust Fund has been envisioned to provide hope, encouragement and motivation to all sons and daughters of Aka Ikot Udo Eno desirous to pursue higher education irrespective of their parental background."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <IntroSection />
      <About />
      <Testimony />
      <Focus />
      <MissionVision />
      <Stats />
      <HowToHelp />
    </>
  );
}
