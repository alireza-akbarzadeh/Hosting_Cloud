import React from "react";
import { AppProps } from "next/app";
import "@styles/global.scss";
import { Provider } from "react-redux";
import store from "@redux/store";
import { appWithTranslation } from "next-i18next";
import "../src/styles/nornalize.css";
import nextI18NextConfig from "next-i18next.config";
import "aos/dist/aos.css";
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      {/* @ts-ignore */}
      <Component {...pageProps} />
    </Provider>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);
