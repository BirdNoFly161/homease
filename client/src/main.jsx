import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./store.js";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import "./i18n.js"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
);
