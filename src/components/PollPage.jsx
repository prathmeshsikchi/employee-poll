import Header from "./Header";
import Avtar from "../assets/avtar.png";
import "../styles/PollPage.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { _saveQuestion, _saveQuestionAnswer } from "../_DATA";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function PollPage() {
  const { questionID } = useParams();
  const location = useLocation();
  const { state } = location;
  const userName = useSelector((state) => state.user.id);
  const navigate = useNavigate();
  const [correct, setCorrect] = useState(false);
  console.log(state);

  const isLogIn = useSelector((state) => state.isLogged);
  useEffect(() => {
    if (state === null) {
      navigate("/404");
      setCorrect(false);
    } else {
      setCorrect(true);
    }
  }, []);

  function handleAnswerSubmit(option) {
    if (option === "One") {
      const obj = {
        authedUser: userName,
        qid: questionID,
        answer: "optionOne",
      };
      _saveQuestionAnswer(obj).then((data) => {
        if (data === true) {
          alert("Vote Submitted");
          navigate("/");
        }
      });
    } else if (option === "Two") {
      const obj = {
        authedUser: userName,
        qid: questionID,
        answers: "optionTwo",
      };
      _saveQuestionAnswer(obj).then((data) => {
        if (data === true) {
          alert("Vote Submitted");
          navigate("/");
        }
      });
    }
  }

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
                  <button
                    className="SelectOptionButton"
                    onClick={() => handleAnswerSubmit("One")}
                  >
                    Click
                  </button>
                </div>
                <div>
                  <div className="OptionContainer">{state.optionTwo.text}</div>
                  <button
                    className="SelectOptionButton"
                    onClick={() => handleAnswerSubmit("Two")}
                  >
                    Click
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
