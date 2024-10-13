import { RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";
import createRoutes from "./routes.jsx";
import "./App.css";

function App() {
  const [cartValue, setCartValue] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=20"
        );
        if (!response.ok) setError("error network");
        const products = await response.json();
        setProducts(products);
        setLoading(false);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProducts();
  }, []);

  if (error)
    return (
      <>
        <p>{error}</p>
      </>
    );

  if (loading)
    return (
      <>
        <p>Loading...</p>
      </>
    );

  return (
    <>
      <RouterProvider
        router={createRoutes(cartValue, products, setCartValue)}
      />
    </>
  );
}

export default App;
