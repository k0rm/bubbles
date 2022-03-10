import React from 'react';
import './styles.scss';

import {NavLink} from 'react-router-dom';


const Navbar = () => {

    return (
        <div className="navContainer">
            <div className="navLogo">
                <h3>
                    <NavLink className="nLogo"  to="/">BUBBLES</NavLink>
                </h3>
            </div>

            <div className="navLinks">
                <ul>
                    <li className="navLink">
                        <NavLink className="nLink"  to="/products">Products</NavLink>
                    </li>
                    <li className="navLink">
                        <NavLink className="nLink"  to="/bundles">Bundles</NavLink>    
                    </li>
                    <li className="navLink">
                        <NavLink className="nLink"  to="/aboutus">About us</NavLink>    
                    </li>
                    <li className="navLink">
                        <NavLink className="nLink"  to="/cart">Cart</NavLink>    
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;