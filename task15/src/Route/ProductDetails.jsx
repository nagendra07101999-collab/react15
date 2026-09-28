import { useParams } from "react-router-dom";
import useAPI from "../Component/useAPI";

function ProductDetails() {
  const { id } = useParams();

  const { data, loading, error } = useAPI(
    `https://dummyjson.com/products/${id}`
  );

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <p>Price: ₹{data.price}</p>
      <p>Category: {data.category}</p>
    </div>
  );
}

export default ProductDetails;