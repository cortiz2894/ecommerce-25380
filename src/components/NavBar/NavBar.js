import React, { useEffect, useState }from 'react'
import './NavBar.css'
import logo from '../../assets/logo_coderhouse.png';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

export default function NavBar() {
    const [fixedNavBar, setFixedNavBar] = useState(false)

    useEffect(() => {
        function onScrollWindow() {
            if(window.scrollY > 200 ){
                setFixedNavBar(true)
            }else{
                setFixedNavBar(false) 
            }
        }

        window.addEventListener("scroll", onScrollWindow)
        //unmounth
        return () => {
            window.removeEventListener("scroll", onScrollWindow)
        }
    }, [])

    return (
        <AppBar position={fixedNavBar ? "fixed" : "static"}>
            <nav>
                <div className="container-logo">
                    <img src={logo} alt="Logo ecommerce" />
                </div>
                <div className="container-navegation">
                    <ul>
                        <li>
                            <Link to="/">
                                <Button variant="outlined">Home</Button>
                            </Link>
                        </li>
                        <li>
                            <Button variant="outlined">Products</Button>
                        </li>
                        <li>
                            <Link to="/contact">
                                <Button variant="outlined">Contact</Button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/about">
                                <Button variant="outlined">About</Button>
                            </Link>
                        </li>
                    </ul>
                    <CartWidget />
                </div>
            </nav>
        </AppBar>
    )
}