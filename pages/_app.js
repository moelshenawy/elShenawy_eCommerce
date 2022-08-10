import React from "react";
import { Toaster } from "react-hot-toast";

import { Layout } from "../components";
import { StateContextProvider } from "../context/StateContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <StateContextProvider>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContextProvider>
  );
}

export default MyApp;
