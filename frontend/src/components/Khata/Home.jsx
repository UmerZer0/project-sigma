import React from "react";
import Back_Button from "../utilities/Back_Button";

function Home() {
  return (
    <>
      <div className="outer-body">
        <Back_Button />
        <div className="khata-body">
          <section className="sale-section">
            <h1>Sale</h1>
            <table>
              <thead>
                <tr>
                  <th className="first-col ">&nbsp;&nbsp;Name</th>
                  <th>&nbsp;Amount</th>
                </tr>
              </thead>
            </table>
            <button className="add-btn btn">+</button>
          </section>
          <section className="expense-section">
            <h1>Expense</h1>
            <table>
              <thead>
                <tr>
                  <th className="first-col ">&nbsp;&nbsp;Name</th>
                  <th>&nbsp;Type</th>
                  <th>&nbsp;Amount</th>
                </tr>
              </thead>
            </table>
            <button className="add-btn btn">+</button>
          </section>
        </div>
      </div>
    </>
  );
}

export default Home;
