import { useEffect, useState } from "react";
import LoginLogo from "../assets/LoginLogo.png";
import "../styles/LoginPage.css";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions, logIn } from "../features/authentication";
import { useLocation, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();
  const from = location.state.from.pathname;

  const dispatch = useDispatch();
  const isLogIn = useSelector((state) => state.isLogged);

  const navigate = useNavigate();

  useEffect(() => {
    if (isLogIn) {
      dispatch(getQuestions());
      navigate(from);
    }
  }, [isLogIn]);

  function handleLogin() {
    dispatch(logIn({ username, password }));
  }

  return (
    <div className="LoginPageContainer">
      <h1>Employee Polls</h1>
      <div className="LoginLogoContainer">
        <img src={LoginLogo} alt="Login Logo" />
      </div>

      <h3>Log In</h3>
      <div>User</div>
      <input
        type="text"
        className="LoginInput"
        name="User"
        placeholder="User"
        onChange={(event) => setUsername(event.target.value)}
      />
      <div>Password</div>
      <input
        type="password"
        className="LoginInput"
        name="password"
        placeholder="Password"
        onChange={(event) => setPassword(event.target.value)}
      />

      <button
        className="LoginButton"
        disabled={username === "" || password === ""}
        onClick={handleLogin}
      >
        Submit
      </button>
    </div>
  );
}
