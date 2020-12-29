import React, { useState } from "react";
import "/src/styles.css";

export default function Hypotenuse() {
  var a = 0;

  const [outputA, setOutputA] = useState();
  const [outputB, setOutputB] = useState();
  const [outputAnswer, setAnswer] = useState();

  function changeHandlerA(e) {
    setOutputA(parseInt(e.target.value, 10));
  }

  function changeHandlerB(e) {
    setOutputB(parseInt(e.target.value, 10));
  }

  function submitHandler(e) {
    a = Math.sqrt(outputA * outputA + outputB * outputB);
    setAnswer(a.toFixed(2));
    e.preventDefault();
  }

  return (
    <div>
      <h2 className="playsechd">Hypotenuse</h2>
      <form onSubmit={submitHandler}>
        <label className="hypolabel">
          side A:
          <input
            className="hypo-input"
            onChange={changeHandlerA}
            type="number"
          />
        </label>
        <label className="hypolabel">
          side B:
          <input
            className="hypo-input"
            onChange={changeHandlerB}
            type="number"
          />
        </label>
        <br />
        <input className="hypocalcbtn" type="submit" value="CALCULATE" />
      </form>
      <h4>
        Length of Hypotenuse &#x221A; (A<sup>2</sup>+B<sup>2</sup>) ={" "}
        {outputAnswer}
      </h4>
    </div>
  );
}
