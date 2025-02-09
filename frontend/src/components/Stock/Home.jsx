import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    window.api.getProducts().then(setProducts);
  }, []);

  const addProduct = async () => {
    await window.api.insertProduct("Sample Product", 9.99);
    const updatedProducts = await window.api.getProducts();
    setProducts(updatedProducts);
  };

  return (
    <>
      <div className="back-btn-box">
        <Link className="back-btn btn" to="/">
          Back to Dashboard
        </Link>
      </div>

      <div className="stock-body">
        <h1>List of Products</h1>
        <table>
          <thead>
            <tr>
              <th className="first-col ">&nbsp;&nbsp;Name</th>
              <th>&nbsp;Price</th>
            </tr>
          </thead>
          <tbody>
            <tr></tr>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="first-col">{product.name}</td>
                <td>${product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <ul>
          {products.map((product) => (
            <li key={product.id}>
            {product.name} - ${product.price}
            </li>
            ))}
        </ul> */}
        <button className="add-btn btn" onClick={addProduct}>
          +
        </button>
      </div>
    </>
  );
}

export default Home;
