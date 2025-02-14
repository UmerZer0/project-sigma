import React from "react";
import { Link } from "react-router-dom";

function Back_Button() {
  return (
    <>
      <div className="back-btn-box">
        <Link className="back-btn btn" to="/">
          Back to Dashboard
        </Link>
      </div>
    </>
  );
}

export default Back_Button;
