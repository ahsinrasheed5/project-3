import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div className="nav">
            <Link to = "/">Home</Link> { " | " }
            <Link to = "products">Products</Link>      
        </div>
    )
}
