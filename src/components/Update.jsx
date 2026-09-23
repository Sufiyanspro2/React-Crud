import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'

const Update = () => {
  
  const {Id} = useParams()
  const navigate = useNavigate()
  const url = `http://localhost:3000/products/${Id}`;
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const [desc, setDesc] = useState('')
    const [image, setImage] = useState('')
    const firstInput = useRef(null)

    async function updateProduct() {
        const request = await axios.put(url, {title, price, desc, image})
        alert(request)
    }
    useEffect(()=> {
      async function getProduct() {
        const res = await axios.get(url)
        setTitle(res.data.title)
        setPrice(res.data.price)
        setImage(res.data.image)
        setDesc(res.data.desc)
      }
      getProduct()
    }, [url])

    useEffect(()=>{
      firstInput.current?.focus()
    }, [])
  
  async function updateProduct(e) {
    e.preventDefault()
    try {
      await axios.put(url, {title, price, image, desc})
    alert('product updated')
    navigate('/')
    } catch (err) {
      console.error(err)
      alert('update failed')
    }
  }
  return (
    <>
    <div className="container border mt-4 rounded d-flex flex-column">
      <h2>Update Product</h2>
      <form onSubmit={updateProduct}>
        <label>Product Name</label>
        <input className='form-control' ref={firstInput} type="text" value={title} placeholder='Enter Your name' onChange={(e) => setTitle(e.target.value)}/><br/><br/>
        <label>Price</label>
        <input className='form-control' type="number" value={price} onChange={(e) => setPrice(e.target.value)}/><br/><br/>
        <label>Image</label>
        <input className='form-control' type="url" value={image} onChange={(e) => setImage(e.target.value)}/><br/><br/>
        <label>Decription</label>
        <textarea className='form-control' value={desc} onChange={(e) => setDesc(e.target.value)}></textarea><br/><br/>
        <Link className='btn btn-secondary me-2' to='/'>Back</Link>
        <button className='btn btn-primary' type="submit">Update</button>
    </form>
    </div>
    
    </>
  )
}

export default Update
