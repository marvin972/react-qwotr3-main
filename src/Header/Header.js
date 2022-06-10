import React from 'react';
import { Outlet,Link } from 'react-router-dom';

import './Header.css';
import logo from '../logo.svg';

export default function Header() {
    return (
        <header className='header'>
            <div className='logo'>
                <img src={logo} className='logoHeader' />
            </div>
            <nav>
                <ul className='menuHeader'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/produit">Produit</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contect</Link>
                    </li>   
                </ul>
            </nav>
            <Outlet />
        </header>
    )
};
