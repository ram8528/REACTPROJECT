import { useState } from "react";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  // console.log("Header Render");

  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo " src={logo} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>{" "}
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>{" "}
          </li>
          <li>Cart</li>

          <button
            className="login"
            onClick={() => {
              // setbtnNameReact("Logout");
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

// let btnName = "Login";
{
  /* <button className="login" onClick={() => {
              btnName = "LogOut"
            }}>{btnName}</button>    in this case no UI will change so we use stateVariables in this case*/
}
