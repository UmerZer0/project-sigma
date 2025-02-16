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

  const addStock = async (name, quantity) => {
    const price = products.find((product) => product.Name === name);

    await window.api.insertStock(name, quantity, price.Price);
    const updatedStock = await window.api.getStock();
    setStock(updatedStock);
    closeModal();
  };

  const stockUpdate = async (Quantity, Name) => {
    await window.api.updateStock(Quantity, Name);
    const updatedStock = await window.api.getStock();
    setStock(updatedStock);
    closeModal();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const name = formData.get("Product-Name");
    const quantity = formData.get("Quantity");

    if (!ifExistsInStock(name)) {
      addStock(name, quantity);
    } else {
      stockUpdate(quantity, name);
    }

    // stockUpdate(quantity, name);
  };

  const ifExistsInStock = (Name) => {
    for (let i = 0; i < stock.length; i++) {
      if (stock[i].Product_Name === Name) {
        return true;
      }
    }
    return false;
  };

  const openModal = () => {
    const modal = document.querySelector(".modal");
    modal.style.display = "block";
    console.log(stock, products);

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
                <td>x{item.Quantity}</td>
                <td>Rs. {item.Price * item.Quantity}</td>
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
