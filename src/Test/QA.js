import React, { useState } from "react";
import "/src/styles.css";
import "./test.css";

function QA() {
  const dataBaseQA = [
    {
      question:
        "If two angles of a triangle are 30 & 60, what is the third angle?",
      answer: "90"
    },
    {
      question:
        "If two angles of a triangle are 20 & 40, What is the third angle?",
      answer: "120"
    },
    {
      question: "What is the area of triangle with sides of length 3, 4 & 5",
      answer: "6"
    },
    {
      question: "How many obtuse interior angle can a triangle have?",
      answer: "1"
    },
    {
      question:
        "In a equilateral triangle, what is the sum of all its interior angles?",
      answer: "180"
    }
  ];

  const [input, setInput] = useState("");
  const [q, setq] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [button, setButton] = useState("Next Question");

  function changeHandler(e) {
    setInput(e.target.value);
  }

  function clickHandler() {
    var nextq = q + 1;

    if (input === dataBaseQA[q].answer) {
      setScore(score + 1);
    }

    if (nextq < dataBaseQA.length) {
      setq(nextq);
    } else setShowScore(true);
    setInput("");

    var c = parseInt(q, 10) + 2;
    if (c === dataBaseQA.length) {
      setButton("Finish");
    }
  }

  function resetHandler() {
    setInput("");
    setq(0);
    setScore(0);
    setShowScore(false);
    setButton("Next Question");
  }

  return (
    <div className="qa">
      {showScore ? (
        <div className="qaresults">
          <h1>
            You scored {score} / {dataBaseQA.length}
          </h1>
          <button className="qapgbtn" onClick={resetHandler}>
            Play Again!
          </button>
        </div>
      ) : (
        <div>
          <h2 className="testqahd">QA</h2>
          <label className="qalabel">
            {dataBaseQA[q].question} <br />
            <input
              onChange={changeHandler}
              value={input}
              type="number"
              className="testqainput"
              id="qa1"
              min="0"
              max="180"
              placeholder="Enter"
            />
          </label>
          <br />
          <button className="testqabtn" onClick={clickHandler}>
            {button}
          </button>
        </div>
      )}
    </div>
  );
}

export default QA;
