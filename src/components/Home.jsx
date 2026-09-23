import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Home.css'
import { Link  } from 'react-router';
const Home = () => {
  const apiUrl = "http://localhost:3000/products";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const res = await axios.get(apiUrl);
      setProducts(res.data)
    }
    getProducts()
  }, [])

  async function handleDelete(id){
    const confirmDelete = window.confirm("Are you sure you want to delete this product?")
    if(!confirmDelete) return;

    try{
      await axios.delete(`${apiUrl}/${id}`)

      //update local state so we don't need to re-fetch
      setProducts(products.filter(p=> p.id !== id))
    } catch(err){
      console.error(err)
      alert('Delete failed')
    }
  }

  return (
    <>
    <div className="add-btn container d-flex flex-row">
      <Link className="btn btn-primary" to='form'>Add +</Link>
    </div>
    <div className="container">
      {products.map(product => (
      <div className="card" key={product.id}>
            <img className="card-img" src={product.image || "https://media.istockphoto.com/id/2173059563/vector/coming-soon-image-on-white-background-no-photo-available.jpg?s=612x612&w=0&k=20&c=v0a_B58wPFNDPULSiw_BmPyhSNCyrP_d17i2BPPyDTk="} alt={product.title} />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <h3 className="card-title">{product.price}</h3>
            </div>
            <div className="card-buttons">
              {/* <Link to={`update/${product.id}`} className="btn btn-primary">Edit</Link>
              <Link to='/' className="btn btn-secondary">back</Link> */}
              <Link to={`update/${product.id}`} className='btn btn-primary'>Edit</Link>
              <Link className='btn btn-danger' onClick={()=>handleDelete(product.id)}>Delete</Link>
            </div>
          </div>
      ))}
    </div>
    </>
  )
}

export default Home
