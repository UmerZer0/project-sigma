import React, { forwardRef, useImperativeHandle, useState } from "react";
import Fields_Maker from "./Fields_Maker";

const Modal = forwardRef(({ heading, inputs }, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  // Expose openModal and closeModal functions to the parent
  useImperativeHandle(ref, () => ({
    openModal: () => setIsOpen(true),
    closeModal: () => setIsOpen(false),
  }));

  return (
    <>
      {isOpen && (
        <div className="modal modal-reveal">
          <button className="exit-btn" onClick={() => setIsOpen(false)}>
            Close
          </button>
          <h2>{heading}</h2>
          <Fields_Maker fieldsObject={inputs} />
          <button type="submit">Add</button>
        </div>
      )}
    </>
  );
});

export default Modal;
