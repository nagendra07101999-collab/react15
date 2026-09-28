import axios from "axios";
import { useState, useEffect } from "react";

function useAPI(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data.products || response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchApi();
  }, [url]);

  return { data, loading, error };
}

export default useAPI;