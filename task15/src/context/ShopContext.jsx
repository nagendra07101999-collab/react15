import { createContext, useState } from "react";

export const ShopContext = createContext();

function ShopProvider({ children }) {
  const [name, setName] = useState("ShopEasy");

  return (
    <ShopContext.Provider value={{ name, setName }}>
      {children}
    </ShopContext.Provider>
  );
}

export default ShopProvider;