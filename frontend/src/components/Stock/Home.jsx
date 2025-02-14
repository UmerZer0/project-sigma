import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Back_Button from "../utilities/Back_Button";

function Home() {
  const [products, setProducts] = useState([]);
  const [stock, setStock] = useState([]);

  useEffect(() => {
    window.api.getProducts().then(setProducts);
    window.api.getStock().then(setStock);
  }, []);

  const addStock = async () => {
    // await window.api.insertStock() //!Implement this
    const updatedStock = await window.api.getStock();
    setStock(updatedStock);
  };

  // const addProduct = async () => {
  //   await window.api.insertProduct("Sample Product", 9.99);
  //   const updatedProducts = await window.api.getProducts();
  //   setProducts(updatedProducts);
  // };

  const openModal = () => {
    const modal = document.querySelector(".modal");
    modal.style.display = "block";
    console.log("openModal");
  };

  const closeModal = () => {
    const modal = document.querySelector(".modal");
    modal.style.display = "none";
    console.log("closeModal");
  };

  return (
    <>
      <Back_Button />

      <div className="stock-body">
        <h1>List of Products</h1>
        <table>
          <thead>
            <tr>
              <th className="first-col ">&nbsp;&nbsp;Name</th>
              <th>&nbsp;Quantity</th>
              <th>&nbsp;Price</th>
            </tr>
          </thead>
          <tbody>
            <tr></tr>
            {stock.map((item) => (
              <tr key={item.ID}>
                <td className="first-col">{item.Product_Name}</td>
                <td>{item.Quantity}</td>
                <td>${item.Price}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="modal">
          <div className="modal-content">
            <button className="btn close-btn" onClick={closeModal}>
              &times;
            </button>
            <h2>Add Product</h2>
            <form>
              <label htmlFor="name">Name:</label>
              <select name="" id=""></select>
              {/* <input type="select" id="name" name="name" /> */}
              <label htmlFor="price">Price:</label>
              <input type="number" id="price" name="price" />
              <button type="submit" className=" btn">
                Add
              </button>
            </form>
          </div>
        </div>

        <button className="add-btn btn" onClick={openModal}>
          +
        </button>
      </div>
    </>
  );
}

export default Home;
