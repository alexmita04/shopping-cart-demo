import Layout from "./Layout";
import Homepage from "./Components/Homepage";
import Products from "./Components/Products";
import { createBrowserRouter } from "react-router-dom";

function createRoutes(cartValue, products, setCartValue) {
  return createBrowserRouter([
    {
      path: "/",
      element: <Layout cartValue={cartValue} />,
      children: [
        { path: "/", element: <Homepage /> },
        {
          path: "/products",
          element: <Products products={products} setCartValue={setCartValue} />,
        },
      ],
    },
  ]);
}

export default createRoutes;
