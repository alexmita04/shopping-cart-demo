import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./NavigationBar.css";

function NavigationBar({ cartValue }) {
  return (
    <div className="navigation-bar">
      <div className="navigation-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </div>
      <div className="cart">
        <p>Go to cart</p>
        <p>${cartValue}</p>
      </div>
    </div>
  );
}

NavigationBar.propTypes = {
  cartValue: PropTypes.number,
};

export default NavigationBar;
