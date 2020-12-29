import React, { useState } from "react";
import "/src/styles.css";
import "./test.css";

export default function Angles() {
  const [output, setOutput] = useState("");
  const [output1, setOutput1] = useState(0);
  const [output2, setOutput2] = useState(0);
  const [output3, setOutput3] = useState(0);

  function handleChange1(e) {
    setOutput1(e.target.value);
  }

  function handleChange2(e) {
    setOutput2(e.target.value);
  }

  function handleChange3(e) {
    setOutput3(e.target.value);
  }

  function handleSubmit(event) {
    const a1 = parseInt(output1, 10);
    const a2 = parseInt(output2, 10);
    const a3 = parseInt(output3, 10);

    if (a1 + a2 + a3 === 180) {
      setOutput("Good! These set of angles do form a Triangle!");
    } else
      setOutput(
        `You are ${180 - a1 - a2 - a3}\u00B0 off from forming a Triangle.`
      );

    event.preventDefault();
  }

  return (
    <div className="angles">
      <h3 className="testangleshd">Enter angles that form a Triangle</h3>
      <form onSubmit={handleSubmit}>
        <label className="anglelabel" htmlFor="angle1">
          angle 1:
        </label>
        <input
          onChange={handleChange1}
          id="angle1"
          type="number"
          className="angle-input"
          name="angle1"
          min="0"
          max="180"
        />

        <label className="anglelabel" htmlFor="angle2">
          angle 2:
        </label>
        <input
          onChange={handleChange2}
          id="angle2"
          type="number"
          className="angle-input"
          name="angle2"
          min="0"
          max="180"
        />

        <label className="anglelabel" htmlFor="angle3">
          angle 3:
        </label>
        <input
          onChange={handleChange3}
          id="angle3"
          type="number"
          className="angle-input"
          name="angle3"
          min="0"
          max="180"
        />

        <input type="submit" value="CHECK" className="anglecheckbtn" />
      </form>

      <output className="testangleoutput">{output}</output>
    </div>
  );
}
