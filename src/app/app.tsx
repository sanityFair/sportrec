import ReactDOM from "react-dom/client";

import { Routes } from "./routes";
import { Providers } from "./providers";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Providers>
    <Routes />
  </Providers>
);
