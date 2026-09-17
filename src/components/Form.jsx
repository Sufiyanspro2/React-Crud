import axios from 'axios'
import React, { useEffect, useState, useRef } from 'react'

const Form = () => {
  const url = "http://localhost:3000/products"
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const [desc, setDesc] = useState('')
    const [image, setImage] = useState('')
    const firstInput = useRef(null)

    async function createProduct() {
        const request = axios.post(url, {title, price, desc, image})
        alert(request)
    }
    useEffect(()=> {
        firstInput.current.focus()
    }, [])
  return (
    <>
    <form onSubmit={createProduct}>
        <input ref={firstInput} type="text" value={title} placeholder='Enter Your name' onChange={(e) => setTitle(e.target.value)}/><br/><br/>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)}/><br/><br/>
        <input type="url" value={image} onChange={(e) => setImage(e.target.value)}/><br/><br/>
        <textarea value={desc} onChange={(e) => setDesc(e.target.value)}></textarea><br/><br/>
        <button type="submit">Add +</button><br/>
    </form>
    </>
  )
}

export default Form