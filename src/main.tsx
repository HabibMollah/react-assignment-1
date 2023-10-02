import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { SearchContextProvider } from "./contexts/SearchContext.tsx";
import { CurrentPageContextProvider } from "./contexts/CurrentPageContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <SearchContextProvider>
        <CurrentPageContextProvider>
          <App />
        </CurrentPageContextProvider>
      </SearchContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
