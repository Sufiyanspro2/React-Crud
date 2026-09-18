import './List.css'
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router';

const List = () => {
  const apiUrl = "http://localhost:3000/products";
  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] = useState([]);
  const [editData, setEditData] = useState([]);

  async function getProducts() {
    const res = await axios.get(apiUrl);
    setProducts(res.data);
  }

  const startEdit = (product) => {
    setEditingId(product.Id);
    setEditData(...editData)
  }

  const cancelEdit = () => {
    setEditingId(null);
    setEditData({})
  }

  const saveEdit = async () => {
    await axios.put(`${url}/${editingId}`, editData);
    cancelEdit()
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="container">
        {products.map(product => (
          <div key={product.id} className="card">
              <img src={product.image} alt="" />
              <p className="text-body">{product.title}</p>
              <p>{product.price}</p>
              <div className="card-buttons">
                <Link to={`/products/${product.id}/edit`}>
              <button>Update</button>
            </Link>
                <button>Delete</button>
              </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;







// import './List.css'
// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const List = () => {
//   const apiUrl = "http://localhost:3000/products";
//   const [products, setProducts] = useState([]);
//   const [editingId, setEditingId] = useState(null);   // 🔽 which card is being edited
//   const [editData, setEditData] = useState({});        // 🔽 values of that card

//   async function getProducts() {
//     const res = await axios.get(apiUrl);
//     setProducts(res.data);
//   }

//   useEffect(() => { getProducts(); }, []);

//   // Start editing — copy that product into editData
//   const startEdit = (product) => {
//     setEditingId(product.id);
//     setEditData({ ...product });
//   };

//   const cancelEdit = () => {
//     setEditingId(null);
//     setEditData({});
//   };

//   const saveEdit = async () => {
//     await axios.put(`${apiUrl}/${editingId}`, editData);
//     setProducts(products.map(p => (p.id === editingId ? editData : p)));
//     cancelEdit();
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Delete this product?")) return;
//     await axios.delete(`${apiUrl}/${id}`);
//     setProducts(products.filter(p => p.id !== id));
//   };

//   return (
//     <div className="container">
//       {products.map(product => (
//         <div key={product.id} className="card">
//           {editingId === product.id ? (
//             // 🔽 EDIT MODE
//             <>
//               <input
//                 value={editData.title}
//                 onChange={(e) =>
//                   setEditData({ ...editData, title: e.target.value })
//                 }
//               />
//               <input
//                 type="number"
//                 value={editData.price}
//                 onChange={(e) =>
//                   setEditData({ ...editData, price: e.target.value })
//                 }
//               />
//               <button onClick={saveEdit}>Save</button>
//               <button onClick={cancelEdit}>Cancel</button>
//             </>
//           ) : (
//             // 🔽 VIEW MODE
//             <>
//               <img src={product.image} alt="" />
//               <p className="text-body">{product.title}</p>
//               <p>{product.price}</p>
//               <div className="card-buttons">
//                 <button onClick={() => startEdit(product)}>Update</button>
//                 <button onClick={() => handleDelete(product.id)}>Delete</button>
//               </div>
//             </>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default List;