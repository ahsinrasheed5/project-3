import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <ul className="navbar">
           <li> <Link to = "/">Home</Link> </li>
           <li> <Link to = "products">Products</Link></li>      
        </ul>
    )
}
