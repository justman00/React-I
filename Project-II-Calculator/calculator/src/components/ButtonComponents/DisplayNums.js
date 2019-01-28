import React from "react";
import "./Button.css";

import ActionButton from "./ActionButton";
import NumberButton from "./NumberButton";
import ClearButton from "./ClearButton";

const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3];
const signs = ["÷", "x", "-", "+", "="];

const DisplayNums = () => {
  return (
    <div className="calculator-display">
      <div className="white-part">
        <ClearButton />

        <div className="all-nums">
          {nums.map((el, i) => (
            <NumberButton className="number-card" num={"" + el} key={i} />
          ))}
        </div>

        <NumberButton className="zero-button" num={"0"} key={0} />
      </div>

      <div className="red-part">
        {signs.map((sign, i) => (
          <ActionButton sign={sign} key={i} />
        ))}
      </div>
    </div>
  );
};

export default DisplayNums;
