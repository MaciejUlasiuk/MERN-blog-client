import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./hamburgermenu.css";
const HamburgerMenu = () => {
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <>
      <section className="hamburgerMenu">
        <ul className="topListt">
          <li className="topListItemm">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItemm">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="topListItemm">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="topListItemm">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItemm" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </section>
    </>
  );
};

export default HamburgerMenu;
