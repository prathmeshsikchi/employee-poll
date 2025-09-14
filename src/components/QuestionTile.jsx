import { useNavigate } from "react-router-dom";
import "../styles/QuestionTile.css";

export default function QuestionTile(props) {
  const question = props.question;
  console.log(question.author);
  const navigate = useNavigate();
  function ShowButtonClicked() {
    console.log(props.questionType);
    if (props.questionType === "New") {
      navigate(`/pollpage/${question.id}`, { state: question });
    } else {
      navigate(`/poll/${question.id}`, { state: question });
    }
  }

  const timestamp = question.timestamp;
  const date = new Date(timestamp);

  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;

  const time = `${hours}:${minutes}:${ampm}`;
  const formattedDate = `${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getFullYear()}`;

  const final = `${time} | ${formattedDate}`;

  return (
    <div className="QuestionTileMainContainer">
      <div className="UsernameArea">
        <div style={{ fontSize: "20px", fontWeight: "500" }}>
          {question.author}
        </div>
        <div style={{ fontSize: "16px", color: "grey" }}>{final}</div>
      </div>
      <div className="ButtonContainer">
        <button className="ShowButton" onClick={ShowButtonClicked}>
          Show
        </button>
      </div>
    </div>
  );
}
