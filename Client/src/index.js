import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import UserProvider from "./Context/AuthContext";
import MapProvider from "./Context/MapContext";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <MapProvider>
        <App />
      </MapProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
