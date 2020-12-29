import React, { useState } from "react";
import "/src/styles.css";
import "./test.css";
import Angles from "./angles";
import MCQ from "./MCQ";
import QA from "./QA";

export default function Quizes() {
  const [input, setInput] = useState();

  const buttons = ["ANGLES", "MCQ", "Q&A"];

  const menu = [<Angles />, <MCQ />, <QA />];

  function clickHandler(index) {
    setInput(menu[index]);
  }

  return (
    <div className="learning">
      <h1 className="testhd">TEST</h1>

      {buttons.map((item, index) => (
        <button
          className="learnbtn"
          key={index}
          onClick={() => clickHandler(index)}
        >
          {item}
        </button>
      ))}

      <div className="testsection">{input}</div>
    </div>
  );
}
