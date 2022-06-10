import React from 'react';
import { Outlet,Link } from 'react-router-dom';

export default function Header() {
    return (
        <nav>
        <ul className='menuHeader'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/produit">Produit</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>   
        </ul>
        <Outlet />
    </nav>
    );
}