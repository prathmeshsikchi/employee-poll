import Header from "./Header";
import "../styles/Add.css";
import { useEffect, useState } from "react";
import { data, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { _saveQuestion } from "../_DATA";
import { getQuestions } from "../features/authentication";

export default function Add() {
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const userName = useSelector((state) => state.user.id);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogIn = useSelector((state) => state.isLogged);

  function formSubmitted(formData) {
    setOptionOne("");
    setOptionTwo("");

    const obj = {
      author: userName,
      optionOneText: formData.get("optionOne"),
      optionTwoText: formData.get("optionTwo"),
    };

    _saveQuestion(obj).then((data) => {
      alert("Poll Posted Successfully");
      dispatch(getQuestions());
      navigate("/");
      console.log(data);
    });
  }

  return (
    <div>
      <div className="Main">
        <div className="MainArea">
          <div className="AddQuestionArea">
            <div style={{ fontSize: "26px", fontWeight: "500" }}>
              Would You Rather
            </div>
            <div style={{ color: "gray" }}>Create Your Own Poll</div>
            <form action={formSubmitted} className="AddQuestionForm">
              <div>First option</div>
              <input
                className="InputBox"
                type="text"
                placeholder="Option One"
                required
                name="optionOne"
                onChange={(event) => setOptionOne(event.target.value)}
              />
              <div>Second Option</div>
              <input
                className="InputBox"
                type="text"
                placeholder="Option Two"
                required
                name="optionTwo"
                onChange={(event) => setOptionTwo(event.target.value)}
              />
              <div></div>
              <button
                className="LoginButton"
                disabled={optionOne === "" || optionTwo === ""}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
