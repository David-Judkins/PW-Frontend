import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import { HashRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(<React.StrictMode>
  <HashRouter>
    <App />
  </HashRouter>
</React.StrictMode>,
);
