import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import HamburgerMenu from "./HamburgerMenu";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";
  const [state, setState] = useState(false);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <Link className="link topListItemVisible" to="/">
          Blog
        </Link>
        <a href="https://github.com/MaciejUlasiuk">
          <i className="topIcon fab fa-github"></i>
        </a>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings" className="link topListItem">
            Admin Dashboard
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
        <span className="menu" onClick={() => setState((prev) => !prev)}>
          Menu
          {state && <HamburgerMenu />}
        </span>
      </div>
    </div>
  );
}
