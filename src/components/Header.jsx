import { useState } from "react";
import Avtar from "../assets/avtar.png";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../features/authentication";
import "../styles/Header.css";

export default function Header(props) {
  const user = useSelector((state) => state.user);
  let navigate = useNavigate();
  const [selected, setSelected] = useState(props.selected);
  const dispatch = useDispatch();

  return (
    <div className="Header">
      <div className="NavigationContainer">
        <Link to="/" className="Link">
          <div
            className="headerItems"
            style={selected === "Home" ? { boxShadow: "0px 2px black" } : {}}
            onClick={() => setSelected("Home")}
          >
            Home
          </div>
        </Link>
        <Link to="/leadboard" className="Link">
          <div
            className="headerItems"
            style={
              selected === "Leaderboard" ? { boxShadow: "0px 2px black" } : {}
            }
            onClick={() => setSelected("Leaderboard")}
          >
            Leaderboard
          </div>
        </Link>
        <Link to="/add" className="Link">
          <div
            className="headerItems"
            style={selected === "New" ? { boxShadow: "0px 2px black" } : {}}
            onClick={() => setSelected("New")}
          >
            New
          </div>
        </Link>
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
