import React from "react";
import "/src/styles.css";
import "./learn.css";

export default function AnglesL() {
  const angles = [
    "Sum of interior angles of a triangle always equals 180 degrees",
    "An exterior angle equals sum of two opposite interior angles",
    "A triangle is called a Right angled triangle, if one of its interior angle is 90\u00B0",
    "Also an Obtuse angled triangle, if one of its interior angles is greater than 90\u00B0",
    "And Acute angled triangle, if all of its interior angles is less than 90\u00B0"
  ];

  return (
    <div>
      <h2 className="learnsectionhd">Angles</h2>
      <ul>
        {angles.map((item, index) => (
          <li className="learnlist" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
