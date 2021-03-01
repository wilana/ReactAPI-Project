import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="navbar fixed-top bar">
            <h3 className="text-center navbar-brand">Holidays React App</h3>
            <ul className="nav justify-content-end">
                <li className="nav">
                    <Link className="nav-item nav-link" to="/">Home</Link>
                    <Link className="nav-item nav-link" to="/about">About</Link>
                    <Link className="nav-item nav-link" to="/holidays">Holidays</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;