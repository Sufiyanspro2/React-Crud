import './List.css'
import axios from "axios";
import React, { useEffect, useState } from "react";

const List = () => {
  const apiUrl = "http://localhost:3000/products";
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const res = await axios.get(apiUrl);
    setProducts(res.data);
  }

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <div className="container">
        {products.map(product => (
          <div key={product.id} className="card">
            <a
              href="#"
              className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs hover:bg-neutral-secondary-medium"
            >
              <img src={product.image} alt="" />
              <p className="text-body">{product.title}</p>
              <p>{product.price}</p>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
