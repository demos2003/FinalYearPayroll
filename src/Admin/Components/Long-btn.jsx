import '../../CSS/App.css';
import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function LongBtn() {
  return (
    <div>
      <div className="long-btn">
        <button className="btn1 btn1b">Previous</button>
        <button className="btn2 btn1b">1</button>
        <button className="btn3 btn1b">Next</button>
      </div>
    </div>
  );
}

export default LongBtn;
