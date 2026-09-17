import './Navbar.css'
import { Link, Outlet } from 'react-router'

const Navbar = () => {
  return (
    <>
    <nav>
        <Link to='/'>Home</Link>
        <Link to='form'>Form</Link>
        <Link to='list'>List</Link>
    </nav>
    <Outlet/>
    </>
  )
}

export default Navbar