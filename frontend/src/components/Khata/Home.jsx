import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="back-btn-box">
        <Link className="back-btn btn" to="/">
          Back to Dashboard
        </Link>
      </div>

      <div className="khata-body">
        <section className="sale-section">
          <h1>Sale</h1>
        </section>
        <section className="expense-section">
          <h1>Expense</h1>
          {/* <div className="expense-body">Hello</div> */}
        </section>
        <button className="add-btn btn">+</button>
      </div>
    </>
  );
}

export default Home;
