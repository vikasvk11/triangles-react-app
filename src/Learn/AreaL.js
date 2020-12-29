import React from "react";
import "/src/styles.css";

export default function AreaL() {
  const area = [
    "Area of a triangle can be computed in multiple ways depending on available data.",
    "So, if we know all the three sides, then we can use Heron's formula",
    "By Heron's formula, Area =	\u221A(s(s-a)(s-b)(s-c)), where a, b, c are length of sides and s = (a+b+c)/2 is the semiperimeter "
  ];

  return (
    <div>
      <h2 className="learnsectionhd">Area</h2>
      <ul>
        {area.map((item, index) => (
          <li className="learnlist" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
