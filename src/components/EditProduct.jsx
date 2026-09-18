import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';

const EditProduct = () => {
  const {productId} = useParams();
  const navigate = useNavigate();
  const url = "http://localhost:3000/products"
  const [product, setProduct] = useState({
    title: "", price: 0, image: "", desc: "",
  });


  useEffect(() => {
    async function getProduct() {
      const res = await axios.get(`${url}/${productId}`);
      setProduct(res.data);
    }
    getProduct()
  }, [productId])

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios.put(`${url}/${productId}`, product);
    navigate("/list")
  }

  return (
    <>
    <form onSubmit={handleUpdate}>
      <h2>Edit Product #{productId}</h2>

      <input
        type="text"
        value={product.title}
        placeholder="Title"
        onChange={(e) => setProduct({ ...product, title: e.target.value })}
      /><br/><br/>

      <input
        type="number"
        value={product.price}
        placeholder="Price"
        onChange={(e) => setProduct({ ...product, price: e.target.value })}
      /><br/><br/>

      <input
        type="url"
        value={product.image}
        placeholder="Image URL"
        onChange={(e) => setProduct({ ...product, image: e.target.value })}
      /><br/><br/>

      <textarea
        value={product.desc}
        placeholder="Description"
        onChange={(e) => setProduct({ ...product, desc: e.target.value })}
      ></textarea><br/><br/>

      <button type="submit">Save</button>
    </form>

    </>
  )
}

export default EditProduct




