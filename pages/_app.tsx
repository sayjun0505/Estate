import type { AppProps } from "next/app";
import "../styles/globals.css";
import "../styles/landing.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
