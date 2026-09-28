import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import ShopProvider from "./context/ShopContext";
import { Provider } from "react-redux";
import { store } from "./store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
  <Provider store={store}>
  <BrowserRouter>
    <ShopProvider>
  <App />
</ShopProvider>
  </BrowserRouter>
</Provider>
  </StrictMode>
);