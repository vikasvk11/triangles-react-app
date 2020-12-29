import React, { useState } from "react";
import "/src/styles.css";
import "./learn.css";
import Basics from "./Basics";
import AnglesL from "./anglesL";
import AreaL from "./AreaL";

export default function Learning() {
  const [section, setSection] = useState();

  const sections = ["BASIC", "ANGLES", "AREA"];
  const sectionsC = [<Basics />, <AnglesL />, <AreaL />];

  function clickHandler(index) {
    setSection(sectionsC[index]);
  }

  return (
    <div className="learning">
      <h1 className="learnhd">LEARN</h1>

      {sections.map((item, index) => (
        <button
          className="learnbtn"
          onClick={() => clickHandler(index)}
          key={index}
        >
          {item}
        </button>
      ))}
      <div className="learnsection">{section}</div>
    </div>
  );
}
