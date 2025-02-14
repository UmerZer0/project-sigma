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
    await window.api.insertStock(Name, Quantity);
    const updatedStock = await window.api.getStock();
    setStock(updatedStock);
  };

  const onSubmit = (e) => {
    console.log("onSubmit Triggered");

    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const name = formData.get("Product-Name");
    const quantity = formData.get("Quantity");
    stockUpdate(quantity, name);
  };

  const stockUpdate = async (Quantity, Name) => {
    await window.api.updateStock(Quantity, Name);
    const updatedStock = await window.api.getStock();
    setStock(updatedStock);
    closeModal();
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
            <form onSubmit={onSubmit}>
              <label htmlFor="name">Name:</label>
              <select name="Product-Name" id="Product-Name">
                {products.map((product) => (
                  <option
                    key={product.Product_Name}
                    value={product.Product_Name}
                  >
                    {product.Name}
                  </option>
                ))}
              </select>
              <label htmlFor="qunatity">Quantity:</label>
              <input
                defaultValue={0}
                type="number"
                id="Quantity"
                name="Quantity"
              />
              {/* Add a button that sends the inputted data */}
              <button type="submit" className="btn">
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
