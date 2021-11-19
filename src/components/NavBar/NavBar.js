import React from 'react'
import './NavBar.css'
import logo from '../../logo_coderhouse.png';

export default function NavBar() {

    return(
        <nav>
            <div className="container-logo">
                <img src={logo} alt="Logo ecommerce"/>
            </div>
            <ul>
                <li><a>Home</a></li>
                <li><a>Products</a></li>
                <li><a>Contact</a></li>
                <li><a>About </a></li>
            </ul>
        </nav>
    )
}