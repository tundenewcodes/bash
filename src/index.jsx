import React, { StrictMode } from "react";

import { createRoot } from "react-dom/client";
import "./index.css";
import AppContextProvider from "./store/appReducers";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      {" "}
      <AppContextProvider>
        {" "}
        <App />
      </AppContextProvider>{" "}
    </BrowserRouter>
  </StrictMode>
);
