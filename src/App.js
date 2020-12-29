import React, { useState } from "react";
import "./styles.css";
import "./app.css";

import TriangleBg from "./SVG/triangleBg.svg";
import calculatorBg from "./SVG/calculatorBg.svg";
import learningBg from "./SVG/learningBg.svg";
import testBg from "./SVG/testBg.svg";

import imageW from "./websiteB.png";
import imageG from "./GitHub-MarkB.png";
import imageL from "./LinkedINB.png";
import imageI from "./instagramB.png";

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
      <footer>
        <div className="footer-header">Connect with me on</div>
        <ul className="footer-list">
          <li className="list-item-inline">
            <a href="https://vikasvk.netlify.app/">
              <img
                width="20"
                height="20"
                viewBox="0 0 20 20"
                src={imageW}
                alt="Website"
              />
            </a>
          </li>

          <li className="list-item-inline">
            <a href="https://github.com/vikasvk11">
              <img
                width="20"
                height="20"
                viewBox="0 0 20 20"
                src={imageG}
                alt="GitHub"
              />
            </a>
          </li>

          <li className="list-item-inline">
            <a href="https://www.linkedin.com/in/vikas-v-k-a613bb138/">
              <img
                width="20"
                height="20"
                viewBox="0 0 30 30"
                src={imageL}
                alt="LinkedIn"
              />
            </a>
          </li>

          <li className="list-item-inline">
            <a href="https://www.instagram.com/vikasvk_">
              <img
                width="20"
                height="20"
                viewBox="0 0 30 30"
                src={imageI}
                alt="Instagram"
              />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
