import React from "react";
import { Link } from "react-router-dom";
import Back_Button from "../utilities/Back_Button";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Find_Invoice from "./Find_Invoice";
import Fields_Maker from "../utilities/Fields_Maker";

function Invoice_Home() {
  const inputs = {
    Name: `text`,
    Contact: `text`,
    Products: `text`,
    Amount: `number`,
    "Delivery Status": [`select`, [`Delivered`, `Not Delivered`]],
    Delivery: `text`,
  };
  return (
    <>
      <Routes>
        <Route path="/find-invoice" element={<Find_Invoice />} />
      </Routes>

      <Back_Button />
      <form action="">
        <Fields_Maker fieldsObject={inputs} />
      </form>

      <div className="">
        <Link className="btn" to="/invoice/find-invoice">
          Find Invoice
        </Link>
      </div>
    </>
  );
}

export default Invoice_Home;
