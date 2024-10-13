import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import NavigationBar from "./Components/NavigationBar";

function Layout({ cartValue }) {
  return (
    <>
      <NavigationBar cartValue={cartValue}></NavigationBar>
      <Outlet></Outlet>
    </>
  );
}

Layout.propTypes = {
  cartValue: PropTypes.number,
};

export default Layout;
