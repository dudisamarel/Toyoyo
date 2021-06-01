import React from 'react'
import { Link } from 'react-router-dom';

export function AppHeader() {
    return (
        <nav className="navbar flex fs24">
            <Link to={'/'}>
                <h1 className="logo">Toyoyo</h1>
            </Link>
            <ul className="flex ">
                <Link to={'/'}>
                    <li>Home</li>
                </Link>
                <Link to={'/toy'}>
                    <li>Toys</li>
                </Link>
                <Link to={'/dashboard'}>
                    <li>Statistics</li>
                </Link>
                <Link to={'/about'}>
                    <li>About</li>
                </Link>
            </ul>
        </nav>
    )
}
