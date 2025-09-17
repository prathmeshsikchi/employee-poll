import Avtar from "../assets/avtar.png";
import "../styles/PollPage.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { _getUsers, _saveQuestionAnswer } from "../_DATA";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getQuestions, updateUser } from "../features/authentication";

export default function PollPage() {
  const { questionID } = useParams();
  const location = useLocation();
  const { state } = location;
  const userName = useSelector((state) => state.user.id);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [correct, setCorrect] = useState(false);
  const user = useSelector((state) => state.user);
  console.log(state);

  useEffect(() => {
    if (state === null) {
      navigate("/404");
      setCorrect(false);
    } else {
      setCorrect(true);
    }
  }, [navigate, state]);

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
          dispatch(getQuestions());
          _getUsers().then((data) => {
            console.log(data[user.id]);
            dispatch(updateUser());
            navigate("/");
          });
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
          dispatch(getQuestions());
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
