import PropTypes from "prop-types";
import { useState } from "react";
import "./Products.css";

function Card({ product, setCartValue }) {
  const [counter, setCounter] = useState(0);

  function addToCart() {
    setCartValue((cart) => cart + product.price * counter);
  }

  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="image" />
      <div className="card-info">
        <p className="product-title">{product.title.slice(0, 20) + "..."}</p>
        <div className="description">
          {product.description.slice(0, 50) + "..."}
        </div>
        <div className="price">${product.price}</div>
        <div>Counter: {counter}</div>
        <div className="quantity-wrapper">
          <input
            type="text"
            placeholder="Insert quantity"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const inputNum = parseInt(e.target.value);
                if (typeof inputNum === "number" && inputNum > 0)
                  setCounter(inputNum);
                e.target.value = "";
              }
            }}
          />
          <div className="btns-wrapper">
            <button
              onClick={() => {
                setCounter(counter + 1);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                if (counter > 0) setCounter(counter - 1);
              }}
            >
              -
            </button>
          </div>
        </div>
        <button
          className="add-to-cart"
          onClick={() => {
            addToCart();
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

function Products({ products, setCartValue }) {
  return (
    <div className="products">
      <h1>Add products to cart</h1>
      <div className="cards-container">
        {products.map((product) => {
          return (
            <Card
              key={product.id}
              product={product}
              setCartValue={setCartValue}
            />
          );
        })}
      </div>
    </div>
  );
}

Products.propTypes = {
  products: PropTypes.array,
  setCartValue: PropTypes.func,
};

Card.propTypes = {
  product: PropTypes.object,
  setCartValue: PropTypes.func,
};

export default Products;
