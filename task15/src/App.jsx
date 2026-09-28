import { Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Header from "./Component/Header";
import Footer from "./Component/Footer";

import Home from "./Route/Home";
import Products from "./Route/Products";
import ProductDetails from "./Route/ProductDetails";
import Cart from "./Route/Cart";
import About from "./Route/About";
import Contact from "./Route/Contact";

export default function App() {
  return (
    <>
    <Header/>
     <Navbar />
     <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}>
          <Route path=":id" element={<ProductDetails />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </main>
      <Footer />
    </>
  );
}