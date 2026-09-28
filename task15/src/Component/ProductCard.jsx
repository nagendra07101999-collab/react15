import { useDispatch } from "react-redux";
import { addCart } from "../slice/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const updateProduct = async () => {
  await fetch(`https://dummyjson.com/products/${product.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: product.title + " Updated",
    }),
  });

  alert("Product updated");
};

const deleteProduct = async () => {
  await fetch(`https://dummyjson.com/products/${product.id}`, {
    method: "DELETE",
  });

  alert("Product deleted");
};

  return (
    <div>
      <h2>{product.title}</h2>
      <p>₹{product.price}</p>

      <img src={product.thumbnail} alt={product.title} width="150" />


      <button onClick={() => dispatch(addCart(product))}>
        Add to Cart
      </button>

      <button onClick={updateProduct}>Update</button>

<button onClick={deleteProduct}>Delete</button>

    </div>
  );
}

export default ProductCard;