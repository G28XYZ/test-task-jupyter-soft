import ReactDOM from "react-dom/client";
import App from "./components/app/app";
import "./index.scss";
import { StoreProvider } from "./services/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <StoreProvider>
    <App />
  </StoreProvider>
);
