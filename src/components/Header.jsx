import { useState } from "react";
import Avtar from "../assets/avtar.png";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logOut } from "../features/authentication";
import "../styles/Header.css";

export default function Header() {
  const user = useSelector((state) => state.user);
  let navigate = useNavigate();
  // const [selected, setSelected] = useState("Home");
  const dispatch = useDispatch();

  return (
    <div className="Header">
      <div className="NavigationContainer">
        <NavLink to="/" className="Link">
          {({ isActive }) => (
            <div
              className="headerItems"
              style={isActive ? { boxShadow: "0px 2px black" } : {}}
              // onClick={() => setSelected("Home")}
            >
              Home
            </div>
          )}
        </NavLink>
        <NavLink to="/leadboard" className="Link">
          {({ isActive }) => (
            <div
              className="headerItems"
              style={isActive ? { boxShadow: "0px 2px black" } : {}}
              // onClick={() => setSelected("Leaderboard")}
            >
              Leaderboard
            </div>
          )}
        </NavLink>
        <NavLink to="/add" className="Link">
          {({ isActive }) => (
            <div
              className="headerItems"
              style={isActive ? { boxShadow: "0px 2px black" } : {}}
              // onClick={() => setSelected("New")}
            >
              New
            </div>
          )}
        </NavLink>
      </div>
      <div className="ProfileContainer">
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <div className="ProfileImageContainer">
            <img src={Avtar} alt="ProfileImage" className="ProfileImage" />
          </div>
          <div className="headerItems" style={{ padding: "0px" }}>
            {user.id}
          </div>
        </div>
        <div className="headerItems" onClick={() => dispatch(logOut())}>
          Logout
        </div>
      </div>
    </div>
  );
}
