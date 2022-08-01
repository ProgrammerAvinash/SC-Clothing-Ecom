import React from "react";
import { ReactComponent as Logo } from "../../Assets/shopping-logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link className="logoContainer" to="/">
        <Logo style={{ height: "50px", width: "20px" }} />
      </Link>
    </div>
  );
};
export default Header;
