import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Form from './components/Form.jsx'
import Update from './components/Update.jsx'
import Read from './components/Read.jsx'

 const router = createBrowserRouter([
  {
    path:'/',
    Component: Navbar,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'form',
        Component: Form
      },
      {
        path:'update/:Id',
        Component: Update
      },
      {
        path: 'read/:Id',
        Component: Read
      }
    ]
  }
 ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
