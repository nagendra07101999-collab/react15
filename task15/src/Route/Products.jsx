import {  Outlet, useSearchParams } from "react-router-dom";
import useAPI from "../Component/useAPI";
import ProductCard from "../Component/ProductCard";
import { useState } from "react";

function Products() {
  const [newProduct, setNewProduct] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  const { data, loading, error } = useAPI(
    "https://dummyjson.com/products"
  );

  const category = searchParams.get("category") || "";

  const filteredProducts = category
    ? data.filter((product) => product.category === category)
    : data;

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h1>Products</h1>

      <div>
  <button onClick={() => setSearchParams({})}>All</button>
  <button onClick={() => setSearchParams({ category: "beauty" })}>
    Beauty
  </button>
  <button onClick={() => setSearchParams({ category: "fragrances" })}>
    Fragrances
  </button>
  <button onClick={() => setSearchParams({ category: "furniture" })}>
    Furniture
  </button>
</div>

<form
  onSubmit={async (e) => {
    e.preventDefault();

    if (!newProduct) return;

    await fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newProduct,
      }),
    });

    setNewProduct("");
  }}
>
  <input
    value={newProduct}
    onChange={(e) => setNewProduct(e.target.value)}
    placeholder="Product name"
  />

  <button type="submit">Add Product</button>
</form>

      <Outlet />

      {filteredProducts.map((product) => (
      <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Products;