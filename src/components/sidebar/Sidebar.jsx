import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./sidebar.css";

export default function Sidebar() {
  const { user, dispatch } = useContext(Context);
  const [state, setState] = useState(false);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span>ABOUT ME</span>

        <p>Hi! My name is Maciek and i'm 19 years old developer wannabe</p>
        <span>
          Find more of my work on my github:{" "}
          <a href="https://github.com/MaciejUlasiuk">
            <i className="topIcon fab fa-github footerIcon"></i>
          </a>{" "}
        </span>
      </div>
      <div>
        <div className="topCenterFooter">
          <ul className="topListFooter">
            <li className="topListItem footerItem">
              <Link className="link" to="/">
                HOME
              </Link>
            </li>
            <li className="topListItem footerItem">
              <Link className="link" to="/">
                ABOUT
              </Link>
            </li>
            <li className="topListItem footerItem">
              <Link className="link" to="/contact">
                CONTACT
              </Link>
            </li>
            <li className="topListItem footerItem">
              <Link className="link" to="/write">
                WRITE
              </Link>
            </li>
            <li className="topListItem footerItem" onClick={handleLogout}>
              {user && "LOGOUT"}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
