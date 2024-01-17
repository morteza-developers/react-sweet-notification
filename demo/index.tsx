import { createRoot } from "react-dom/client";
import App from "./App";

const devRoot = document.getElementById("_root") as HTMLElement;

const root = createRoot(devRoot);
root.render(<App />);
