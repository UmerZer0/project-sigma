import { useEffect, useRef, useState } from "react";
import React from "react";
import Back_Button from "../utilities/Back_Button";
import Modal from "../utilities/Modal";

function Home() {
  const saleModalRef = useRef();
  const expenseModalRef = useRef();

  const [sale, setSale] = useState([]);
  const [expense, setExpense] = useState([]);

  useEffect(() => {
    window.api.getSale().then(setSale);
    window.api.getExpense().then(setExpense);
  }, []);

  console.log(sale, expense);

  const saleFields = {
    Name: "text",
    Amount: "number",
  };

  const expenseFields = {
    Name: "text",
    Type: ["select", ["Shop", "Home", "Other"]],
    Amount: "number",
  };

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
              <tbody>
                {sale.map((record) => (
                  <tr>
                    <td>{record.Name}</td>
                    <td>{record.Amount}</td>
                  </tr>
                ))}
              </tbody>
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
              <tbody>
                {expense.map((record) => (
                  <tr>
                    <td>{record.Name}</td>
                    <td>{record.Type}</td>
                    <td>{record.Amount}</td>
                  </tr>
                ))}
              </tbody>
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
