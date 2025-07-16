import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./general.css";
import "modern-normalize";
import App from "./components/App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
