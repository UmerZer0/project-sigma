import React from "react";
import Fields_Maker from "./Fields_Maker";

function Modal({ heading, inputs }) {
  return (
    <>
      <button className="exit-btn">Close</button>
      <h2>{heading}</h2>
      <Fields_Maker fieldsObject={inputs} />
      <button type="submit">Add</button>
    </>
  );
}

export default Modal;
