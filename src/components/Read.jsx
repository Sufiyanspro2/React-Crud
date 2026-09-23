import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'

const Read = () => {
  const { Id } = useParams()
  const [product, setProducts] = useState(null)
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    async function getProducts() {
    try {
      const res = await axios.get(`http://localhost:3000/products/${Id}`)
      setProducts(res.data)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }
    getProducts()
  }, [Id])

  if(loading) return <p>loading...</p>
  if(!product) return <p>product not found</p>
  return (
    <>
  <div className="bg-light min-vh-100 py-5">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-11 col-xl-10">

          <div className="card border-0 shadow-sm rounded-3 overflow-hidden">

            {/* Fixed-height image frame — prevents stretching */}
            <div style={{ height: '380px', overflow: 'hidden', backgroundColor: '#f8f9fa' }}>
              <img
                src={product.image || "https://via.placeholder.com/1200x600?text=No+Image"}
                alt={product.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  display: 'block'
                }}
              />
            </div>

            <div className="card-body p-4 p-md-5">
              <span className="badge text-bg-secondary text-uppercase mb-2">
                Product #{product.id}
              </span>
              <h2 className="card-title fw-bold mb-2">{product.title}</h2>
              <p className="text-primary fw-bold fs-3 mb-3">${product.price}</p>

              <hr />

              <h6 className="text-uppercase text-muted fw-semibold mb-2">Description</h6>
              <p
                className="text-secondary lh-base mb-4"
                style={{ whiteSpace: 'pre-wrap', maxWidth: '70ch' }}
              >
                {product.desc || "No description provided."}
              </p>

              <div className="d-flex gap-2">
                <Link to={`/update/${product.id}`} className="btn btn-primary">Edit</Link>
                <Link to="/" className="btn btn-outline-secondary">Back to Home</Link>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  </div>
</>
  )
}

export default Read
