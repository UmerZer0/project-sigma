import React from "react";

/*
This function takes an object of field types and returns an array of JSX elements

Object : {Label: Type}

Label : string
Type : string or array (when the type === `select`)

Type        |   Value
--------------------------------
 text       |   "text"
 number     |   "number"
 select     |   ["select", ["option1", "option2", ...]]
*/

function Fields_Maker({ fieldsObject }) {
  return Object.entries(fieldsObject).map(([label, type]) => (
    <>
      <label htmlFor={label}>{label}</label>
      {Array.isArray(type) && type[0] === "select" ? (
        <select name={label} id={label}>
          {type[1].map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input type={type} id={label} name={label} />
      )}
    </>
  ));
}

export default Fields_Maker;
