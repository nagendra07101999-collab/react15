import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

function Header() {

  const { name } = useContext(ShopContext);

  return (
    <header>
      <h2>{name}</h2>
      <p>Your simple online shopping store</p>
    </header>
  );
}

export default Header;