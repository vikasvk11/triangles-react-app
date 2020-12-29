import React from "react";
import "/src/styles.css";
import "./learn.css";

export default function Basics() {
  const basics = [
    "A Triangle is a 2D closed shape with three straight sides",
    "Hence, they have 3 vertices, 3 interior angles",
    "Any 3 non collinear points in a 2D plane will form a triangle"
  ];

  return (
    <div>
      <h2 className="learnsectionhd"> Basic </h2>
      <ul>
        {basics.map((item, index) => (
          <li className="learnlist" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
