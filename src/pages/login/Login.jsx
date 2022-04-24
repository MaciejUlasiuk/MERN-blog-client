import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css";
import request from "../../helpers/request";
export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const [wrongCred, setWrongCred] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await request.post("/api/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      if (res.status === 400) {
        dispatch({ type: "LOGIN_FAILURE" });
        setWrongCred("Wrong Credentials!");
      } else if (res.status === 200) {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  const wrongCredComponent = wrongCred ? (
    <p style={{ color: "red", textAlign: "center", marginTop: "5px" }}>
      {wrongCred}
    </p>
  ) : null;
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your username..."
          ref={userRef}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        {wrongCredComponent}
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
    </div>
  );
}
