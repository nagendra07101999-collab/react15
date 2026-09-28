import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../slice/cartSlice";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Cart</h1>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>₹{product.price}</p>

            <button onClick={() => dispatch(removeCart(product.id))}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;