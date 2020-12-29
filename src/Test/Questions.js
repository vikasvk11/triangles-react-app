import React, { useState } from "react";
import "/src/styles.css";
import "./test.css";

function Questions() {
  const [q, setQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const dataBase = [
    {
      questionId: 1,
      question: "Which of these sets of sides form a triangle?",
      options: ["2, 2, 4", "5, 6, 3", "2, 1, 4", "1, 1, 4"],
      answer: "5, 6, 3"
    },
    {
      questionId: 2,
      question: "What does 's' mean in Heron's formula?",
      options: [
        "Perimeter",
        "Semi-perimeter",
        "Avg-perimeter",
        "None of the above"
      ],
      answer: "Semi-perimeter"
    },
    {
      questionId: 3,
      question: "Which of the following is a Pythagorean Triplet",
      options: ["1, 2, 3", "3, 4, 5", "5, 6, 7", "7, 8, 9"],
      answer: "3, 4, 5"
    },
    {
      questionId: 4,
      question:
        "What is the length of hypotenuse, if two of its sides are 6cm & 8cm long?",
      options: ["10cm", "5cm", "15cm", "12cm"],
      answer: "10cm"
    },
    {
      questionId: 5,
      question: "How many diagonals does a triangle have?",
      options: ["0", "1", "2", "3"],
      answer: "0"
    },
    {
      questionId: 6,
      question:
        "An exterior angle of a triangle is 90, what is the sum of the interior angles to its opposite?",
      options: ["45", "90", "180", "30"],
      answer: "90"
    }
  ];

  function clickHandler(item) {
    if (item === dataBase[q].answer) {
      setScore(score + 1);
    }

    const nextq = q + 1;
    if (nextq < dataBase.length) {
      setQ(nextq);
    } else setShowScore(true);
  }

  function clickReset() {
    setShowScore(false);
    setQ(0);
    setScore(0);
  }

  return (
    <div className="mcq">
      {showScore ? (
        <div className="mcqresults">
          <h2>
            You scored {score} / {dataBase.length}
          </h2>
          <button className="mcqpgbtn" onClick={clickReset}>
            Reset Quiz
          </button>
        </div>
      ) : (
        <div>
          <h3 className="mcqhd">
            Q. {q + 1} <span>/ {dataBase.length}</span>
          </h3>
          <p className="mcqq">{dataBase[q].question}</p>
          {dataBase[q].options.map((item, index) => (
            <button
              className="mcqoptions"
              key={index}
              onClick={() => clickHandler(item)}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Questions;
