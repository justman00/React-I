import React from "react";
import "./Button.css";

import ActionButton from "./ActionButton";
import NumberButton from "./NumberButton";

// const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3];
// const signs = ["÷", "x", "-", "+", "="];

class DisplayNums extends React.Component {
  constructor(props) {
    super(props);
    this.nums = [7, 8, 9, 4, 5, 6, 1, 2, 3];
    this.signs = ["÷", "x", "-", "+", "="];
    this.operations = [];

    this.state = {
      total: 0
    };
  }

  componentDidMount() {
    this.add(4, 3);
    console.log(this.state.total);
  }

  render() {
    return (
      <div className="calculator-display">
        <div className="white-part">
          <div>
            <NumberButton className="zero-button" num={"clear"} key={90} />
          </div>

          <div className="all-nums">
            {this.nums.map((el, i) => (
              <NumberButton className="number-card" num={"" + el} key={i} />
            ))}
          </div>
          <div>
            <NumberButton className="zero-button" num={"0"} key={0} />
          </div>
        </div>

        <div className="red-part">
          {this.signs.map((sign, i) => (
            <ActionButton sign={sign} key={i} />
          ))}
        </div>
      </div>
    );
  }

  add(x, y) {
    let res = x + y;
    return this.setState({ total: res });
  }
  multiply(x, y) {
    return this.setState({ total: x * y });
  }
  divide(x, y) {
    return this.setState({ total: x / y });
  }
  minus(x, y) {
    return this.setState({ total: x - y });
  }
  showTotal() {
    return this.state.total;
  }
}

// const DisplayNums = () => {
//   return (
//     <div className="calculator-display">
//       <div className="white-part">
//         <ClearButton />

//         <div className="all-nums">
//           {nums.map((el, i) => (
//             <NumberButton className="number-card" num={"" + el} key={i} />
//           ))}
//         </div>

//         <NumberButton className="zero-button" num={"0"} key={0} />
//       </div>

//       <div className="red-part">
//         {signs.map((sign, i) => (
//           <ActionButton sign={sign} key={i} />
//         ))}
//       </div>
//     </div>
//   );
// };

export default DisplayNums;
