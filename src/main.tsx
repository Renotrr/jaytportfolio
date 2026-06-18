import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "@fontsource/public-sans/300.css";
import "@fontsource/public-sans/400.css";
import "@fontsource/public-sans/600.css";
import "@fontsource/public-sans/700.css";
import "@fontsource/public-sans/800.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
