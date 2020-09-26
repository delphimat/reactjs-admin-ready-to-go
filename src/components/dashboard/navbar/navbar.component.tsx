import React from "react";

import { LinkContainer } from 'react-router-bootstrap';


import './navbar.styles.css';


const NavBar = () => {
    return (
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
            <LinkContainer to="/">
                <span className="navbar-brand col-sm-3 col-md-2 mr-0" >
                    Company name
                </span>
            </LinkContainer>
            <input className="form-control form-control-dark w-100" type="text" placeholder="Search"
                   aria-label="Search"/>
            <ul className="navbar-nav px-3">
                <li className="nav-item text-nowrap">
                    <LinkContainer to="/login">
                        <span className="nav-link" >Sign out</span>
                    </LinkContainer>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;