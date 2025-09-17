import Header from "./Header";
import Avtar from "../assets/avtar.png";
import "../styles/Poll.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Poll() {
  const { questionID } = useParams();
  const location = useLocation();
  const { state } = location;

  const [correct, setCorrect] = useState(false);
  useEffect(() => {
    if (state === null) {
      navigate("/404");
      setCorrect(false);
    } else {
      setCorrect(true);
    }
  }, []);

  const navigate = useNavigate();
  const isLogIn = useSelector((state) => state.isLogged);

  let optionOneVotePercent;
  let optionTwoVotePercent;

  if (correct) {
    optionOneVotePercent =
      (state.optionOne.votes.length * 100) /
      (state.optionOne.votes.length + state.optionTwo.votes.length);

    optionTwoVotePercent =
      (state.optionTwo.votes.length * 100) /
      (state.optionOne.votes.length + state.optionTwo.votes.length);
  }

  // console.log(productID);
  console.log(state);

  return (
    <div>
      {correct && (
        <div className="Main">
          <div className="MainArea">
            <div className="AddQuestionArea">
              <div style={{ fontSize: "26px", fontWeight: "500" }}>
                Poll By {state.author}
              </div>
              <div
                className="ProfileImageContainer"
                style={{
                  width: "250px",
                  height: "250px",
                  borderRadius: "50%",
                  margin: "20px",
                }}
              >
                <img
                  src={Avtar}
                  alt="ProfileImage"
                  className="ProfileImage"
                  style={{ width: "250px", height: "250px" }}
                />
              </div>
              <div style={{ fontSize: "26px", fontWeight: "500" }}>
                Would You Rather
              </div>
              <div className="QuestionOptionContainer">
                <div>
                  <div className="OptionContainer">{state.optionOne.text}</div>
                  <div className="VotesContainer">
                    {optionOneVotePercent} % (Votes :{" "}
                    {state.optionOne.votes.length})
                  </div>
                  {/* <button className="SelectOptionButton">Click</button> */}
                </div>
                <div>
                  <div className="OptionContainer">{state.optionTwo.text}</div>
                  <div className="VotesContainer">
                    {optionTwoVotePercent} % ( Votes :{" "}
                    {state.optionTwo.votes.length} )
                  </div>
                  {/* <button className="SelectOptionButton">Click</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
