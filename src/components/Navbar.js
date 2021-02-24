import React from 'react'
import { Link } from 'react-router-dom'
import './Form.css';


const Navbar = () => {
    return (
        <div className='navbarlink'>
            <Link to='/'>Home </Link>
            <Link to='/pizza'> Order Pizza</Link>
        </div>
    )
}

export default Navbar;
