import "../styles/globals.css";
import type { AppProps } from "next/app";

import Navbar from "../components/navbar.component";
import { Footer } from "../components/footer.component";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
