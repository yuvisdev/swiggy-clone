import { LOGO_URL } from "../../utils/constants";
let Header = () => {
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
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
        <li>
          <a href="">Cart</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
