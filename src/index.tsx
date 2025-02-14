import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}
