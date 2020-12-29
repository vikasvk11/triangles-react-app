import React, { useState } from "react";
import "./styles.css";
import "./app.css";

import TriangleBg from "./SVG/triangleBg.svg";
import calculatorBg from "./SVG/calculatorBg.svg";
import learningBg from "./SVG/learningBg.svg";
import testBg from "./SVG/testBg.svg";

import TriangleBgM from "./SVG/triangleBgM.svg";
import calculatorBgM from "./SVG/calculatorBgM.svg";
import learningBgM from "./SVG/learningBgM.svg";
import testBgM from "./SVG/testBgM.svg";

import Learning from "./Learn/Learning";
import Quizes from "./Test/Quizes";
import Calculator from "./Play/Calculator";

import TraingleBgAnime from "./TriangleBgAnime";

export default function App() {
  const [input, setInput] = useState();

  const [bg, setBg] = useState(TriangleBg);

  const buttons = ["LEARN", "TEST", "PLAY"];

  const menu = [<Learning />, <Quizes />, <Calculator />];

  const bgArrayD = [learningBg, testBg, calculatorBg];

  const bgArrayM = [learningBgM, testBgM, calculatorBgM];

  function clickHandler(index) {
    setInput(menu[index]);
    if (window.innerWidth >= 550) {
      setBg(bgArrayD[index]);
    } else setBg(bgArrayM[index]);
  }

  return (
    <div>
      <div>
        <TraingleBgAnime />
      </div>
      <div className="App" style={{ backgroundImage: `url(${bg})` }}>
        <h1 className="mainhd">TRIANGLES</h1>

        {buttons.map((item, index) => (
          <button
            className="mainbtn"
            key={index}
            onClick={() => clickHandler(index)}
          >
            {" "}
            {item}{" "}
          </button>
        ))}

        <div className="content">{input}</div>
      </div>
    </div>
  );
}
