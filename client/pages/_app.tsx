import "./globals.css";

import "@fortawesome/fontawesome-svg-core/styles.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div>
    <Component {...pageProps} />
    <ToastContainer />
  </div>
);

export default MyApp;
