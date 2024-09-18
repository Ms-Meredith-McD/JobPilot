import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.scss";
import { ProfileContextProvider } from "./context/ProfileContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProfileContextProvider>
      <App />
    </ProfileContextProvider>
  </React.StrictMode>
);
