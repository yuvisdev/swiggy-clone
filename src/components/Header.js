import { LOGO_URL } from "../../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

let Header = () => {
  let [initalText, setText] = useState("login");
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} className="sir-img" />
        <h1>
          Swiggy<span>Wallah</span>
        </h1>
      </div>
      <ul className="nav-items">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="#">Cart</Link>
        </li>
        <button
          className="btn login-btn"
          onClick={() => {
            initalText == "login" ? setText("logout") : setText("login");
          }}
        >
          {initalText}
        </button>
      </ul>
    </div>
  );
};

export default Header;
