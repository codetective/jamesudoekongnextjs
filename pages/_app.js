import "../styles/globals.css";

import { Box, ChakraProvider } from "@chakra-ui/react";
import TopContactBar from "../components/general/TopContactBar";
import Navbar from "../components/nav/Navbar";
import Footer from "../components/homepage/Footer";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <TopContactBar />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}
export default MyApp;
