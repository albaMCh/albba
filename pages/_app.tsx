import "../styles/globals.css";
import type { AppProps } from "next/app";

import Navbar from "../components/navbar.component";
import { Footer } from "../components/footer.component";
import { Logo } from "../components/logo.component";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Logo />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
