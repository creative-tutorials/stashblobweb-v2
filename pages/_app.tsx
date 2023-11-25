import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Script src="https://cdn.splitbee.io/sb.js" />
    </>
    // <script async src=""></script>
  );
}
