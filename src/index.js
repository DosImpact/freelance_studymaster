import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import Theme from "styles/Theme";
import GlobalStyles from "styles/GlobalStyles";
import { ThemeProvider } from "styled-components";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <App />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
