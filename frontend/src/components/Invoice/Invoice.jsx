import { BrowserRouter, Routes, Route } from "react-router-dom";
import Invoice_Home from "./Invoice_Home";
import Find_invoice from "./Find_Invoice";

function Invoice() {
  return (
    <>
      <Routes>
        <Route path="" element={<Invoice_Home />}></Route>
        <Route path="/find-invoice" element={<Find_invoice />} />
      </Routes>
    </>
  );
}

export default Invoice;
