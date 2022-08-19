import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { LocationProvider } from "./contexts/LocationContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLDivElement
);
root.render(
  <React.StrictMode>
    <LocationProvider>
      <App />
    </LocationProvider>
  </React.StrictMode>
);
