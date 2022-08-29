import "@fontsource/roboto";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";

import Router from "./routes/Router";
import { customeTheme } from "./theme";
import * as serviceWorker from "./serviceWorkerRegistration";
import Layout from "./components/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={customeTheme}>
        <RecoilRoot>
          <Layout>
            <Router />
          </Layout>
        </RecoilRoot>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);

serviceWorker.register();
