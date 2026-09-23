import './Navbar.css'
import { Link, Outlet } from 'react-router'

const Navbar = () => {
  return (
    <>
    <nav>
        <Link to='/'>Home</Link>
        <Link to='form'>Add Motorcycle</Link>
    </nav>
    <Outlet/>
    </>
  )
}

export default Navbar