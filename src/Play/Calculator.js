import React, { useState } from "react";
import "/src/styles.css";
import "./play.css";
import Hypotenuse from "./Hypotenuse";
import Area from "./Area";

export default function Calculator() {
  const [input, setInput] = useState();

  const calculatorMenu = ["HYPOTENUSE", "AREA"];
  const calculatorComponents = [<Hypotenuse />, <Area />];

  function clickHandler(index) {
    setInput(calculatorComponents[index]);
  }

  return (
    <div className="calculator">
      <h1 className="playhd">PLAY</h1>
      {calculatorMenu.map((item, index) => (
        <button
          className="playbtn"
          onClick={() => clickHandler(index)}
          key={index}
        >
          {item}
        </button>
      ))}

      <div className="playsection">{input}</div>
    </div>
  );
}
