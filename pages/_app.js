import "../styles/globals.css";

import { Box, ChakraProvider } from "@chakra-ui/react";
import TopContactBar from "../components/general/TopContactBar";
import Navbar from "../components/nav/Navbar";
import Footer from "../components/homepage/Footer";
import "react-image-lightbox/style.css";
import GeneralProvider from "../components/context/AppContext";
import NewsMarquee from "../components/homepage/NewsMarquee";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <GeneralProvider>
      <ChakraProvider>
        <TopContactBar />
        {router.pathname === "/" && <NewsMarquee />}

        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </GeneralProvider>
  );
}
export default MyApp;
