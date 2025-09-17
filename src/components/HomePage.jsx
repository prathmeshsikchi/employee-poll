import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "../styles/HomePage.css";
import Header from "./Header";
import QuestionTile from "./QuestionTile";

export default function HomePage() {
  const isLogIn = useSelector((state) => state.isLogged);
  const questions = useSelector((state) => state.question);
  const user = useSelector((state) => state.user);
  let navigate = useNavigate();

  useEffect(() => {
    if (!isLogIn) {
      navigate("/login");
    }
  }, [isLogIn]);

  let newQuestionElementArray = [];
  let answeredQuestionElementArray = [];

  Object.entries(questions).forEach(([key, element]) => {
    console.log(element);

    if (user.answers.hasOwnProperty(key)) {
      const ele = (
        <QuestionTile
          key={element.id}
          question={element}
          questionType="Answered"
        ></QuestionTile>
      );
      answeredQuestionElementArray = [...answeredQuestionElementArray, ele];
    } else {
      const ele = (
        <QuestionTile
          key={element.id}
          question={element}
          questionType="New"
        ></QuestionTile>
      );
      newQuestionElementArray = [...newQuestionElementArray, ele];
    }
  });

  return (
    <div className="MainPage">
      <div className="Main">
        <div className="MainArea">
          <div className="NewQuestionContainer">
            <div
              style={{
                fontSize: "22px",
                borderBottom: "1px solid #d5d5d6",
                padding: "20px",
              }}
            >
              New Question
            </div>
            <div className="QuestionTileArea">{newQuestionElementArray}</div>
          </div>
          <div className="DoneContainer">
            <div
              style={{
                fontSize: "22px",
                borderBottom: "1px solid #d5d5d6",
                padding: "20px",
              }}
            >
              Done
            </div>
            <div className="QuestionTileArea">
              {answeredQuestionElementArray}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
