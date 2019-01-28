import React from "react";
import "./Header.css";
const moment = require("moment");

const HeaderTitle = () => {
  return (
    <div className="names">
      <h2 className="name-primary">Lambda School</h2>
      <h3 className="name-secondary">
        @LambdaSchool • {moment().format("D MMM")}
      </h3>
    </div>
  );
};

export default HeaderTitle;
