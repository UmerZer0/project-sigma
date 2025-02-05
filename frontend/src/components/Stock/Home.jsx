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
      <div>This is Stock Home</div>
      <Link to="/">
        <button>Back</button>
      </Link>

      <div>
        <h1>Product List</h1>
        <button onClick={addProduct}>Add Product</button>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Home;
