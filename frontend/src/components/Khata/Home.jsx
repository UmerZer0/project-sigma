import { useRef } from "react";
import React from "react";
import Back_Button from "../utilities/Back_Button";
import Modal from "../utilities/Modal";

const saleFields = {
  Name: "text",
  Amount: "number",
};

const expenseFields = {
  Name: "text",
  Type: ["select", ["Shop", "Home", "Other"]],
  Amount: "number",
};

function Home() {
  const saleModalRef = useRef();
  const expenseModalRef = useRef();

  return (
    <>
      {/* <Back_Button />
      <Modal heading="Add Expense" inputs={expenseFields} /> */}

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
            <Modal heading="Add Sale" inputs={saleFields} ref={saleModalRef} />
            <button
              className="add-btn btn"
              onClick={() => {
                expenseModalRef.current.closeModal();
                saleModalRef.current.openModal();
              }}
            >
              +
            </button>
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
            <Modal
              heading="Add Expense"
              inputs={expenseFields}
              ref={expenseModalRef}
            />
            <button
              className="add-btn btn"
              onClick={() => {
                saleModalRef.current.closeModal();
                expenseModalRef.current.openModal();
              }}
            >
              +
            </button>
          </section>
        </div>
      </div>
    </>
  );
}

export default Home;
