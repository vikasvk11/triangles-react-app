import React, { useState } from "react";
import "/src/styles.css";
import "./play.css";

export default function Area() {
  const [sideA, setSideA] = useState(0);
  const [sideB, setSideB] = useState(0);
  const [sideC, setSideC] = useState(0);
  const [area, setArea] = useState(0);

  var s = 0;
  var a = 0;

  function changeHandlerA(e) {
    setSideA(parseInt(e.target.value, 10));
  }

  function changeHandlerB(e) {
    setSideB(parseInt(e.target.value, 10));
  }

  function changeHandlerC(e) {
    setSideC(parseInt(e.target.value, 10));
  }

  function submitHandler(e) {
    if (
      sideA + sideB > sideC &&
      sideA + sideC > sideB &&
      sideB + sideC > sideA
    ) {
      s = (sideA + sideB + sideC) / 2;
      a = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));
      setArea(`Area = ${a.toFixed(2)}`);
    } else
      setArea("Take a Moment to think why these sides don't form a triangle");
    e.preventDefault();
  }

  return (
    <div>
      <h2 className="playsechd">Area</h2>
      <h4 className="areasubhd">Enter the length of sides of a triangle</h4>
      <form onSubmit={submitHandler}>
        <label className="arealabel">
          side A:
          <input
            className="area-input"
            onChange={changeHandlerA}
            type="number"
          />
        </label>

        <label className="arealabel">
          side B:
          <input
            className="area-input"
            onChange={changeHandlerB}
            type="number"
          />
        </label>

        <label className="arealabel">
          side C:
          <input
            className="area-input"
            onChange={changeHandlerC}
            type="number"
          />
        </label>
        <br />
        <input className="areacalcbtn" type="submit" value="Calculate" />
      </form>
      <h4> &#x221A; (s*(s-A)*(s-B)*(s-C)) = {area}</h4>
    </div>
  );
}
