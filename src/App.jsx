import { useState } from 'react'
import './App.css'
import { createBrowserRouter, Outlet } from 'react-router'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Form from './components/Form'

function App() {


  return (
    <>
      <Navbar/>
      <Outlet/>
    </>  
  )
}

export default App
