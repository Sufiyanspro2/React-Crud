import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Read = () => {
    const [data, setData] = useState([]);
    const {id} = useParams();
    useEffect(()=>{
        async function getProduct(){
            const product = await axios.get(`http://localhost:3000/products`);
            setData(product.data)
        } 
        getproduct()
    }, [])

  return (
    <>
    
    </>
  )
}

export default Read
