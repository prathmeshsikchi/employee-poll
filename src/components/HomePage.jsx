import { useSelector } from "react-redux";
import { useState } from "react";
import "../styles/HomePage.css";
import QuestionTile from "./QuestionTile";
import Switch from "react-switch";

export default function HomePage() {
  const questions = useSelector((state) => state.question);
  const user = useSelector((state) => state.user);
  const [checked, setChecked] = useState(false);

  console.log(user);

  let newQuestionElementArray = [];
  let answeredQuestionElementArray = [];

  Object.entries(questions).forEach(([key, element]) => {
    // console.log(element);

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

  function toggleQuestionContainer() {
    setChecked((data) => !data);
  }

  return (
    <div className="MainPage">
      <div className="Main">
        <div className="MainArea">
          <div className="ToggleButtonContainer">
            <label htmlFor="ToggleButton">New</label>
            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={toggleQuestionContainer}
              checked={checked}
              id="ToggleButton"
            />
            <label htmlFor="ToggleButton">Answered</label>
          </div>

          {!checked && (
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
          )}
          {checked && (
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
          )}
        </div>
      </div>
    </div>
  );
}
