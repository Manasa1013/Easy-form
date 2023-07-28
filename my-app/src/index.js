import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import { FormProvider} from "./Contexts/FormContext"
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <FormProvider>
      <App />
      </FormProvider>
    </Router>

  </React.StrictMode>
);

reportWebVitals();
