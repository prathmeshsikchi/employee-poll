import { useEffect, useState } from "react";
import "../styles/Leaderboard.css";
import Avtar from "../assets/avtar.png";
import { _getUsers } from "../_DATA";

export default function Leaderboard() {
  const [allUsers, setAllUsers] = useState({});

  useEffect(() => {
    _getUsers().then((data) => {
      setAllUsers(data);
    });
  }, []);

  console.log(allUsers);

  let tableRowElement = [];
  Object.entries(allUsers).forEach(([key, element]) => {
    const ele = (
      <tr key={key}>
        <td>
          <div className="UserCell">
            <div className="UserProfileCellContainer">
              <img
                src={Avtar}
                alt="User Profile"
                className="UserProfileIamge"
              />
            </div>

            <div>
              <div style={{ fontSize: "18px", fontWeight: "500" }}>
                {element.name}
              </div>
              <div style={{ color: "gray", fontSize: "16px" }}>
                {element.id}
              </div>
            </div>
          </div>
        </td>
        <td>{Object.entries(element.answers).length}</td>
        <td>{element.questions.length}</td>
      </tr>
    );

    tableRowElement = [...tableRowElement, ele];
  });

  return (
    <div>
      <div className="Main">
        <div className="MainArea">
          <table className="LeaderboardTable">
            <thead>
              <tr>
                <th style={{ width: "60%" }}>Users</th>
                <th>Answered</th>
                <th>Created</th>
              </tr>
            </thead>
            <tbody>{tableRowElement}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
