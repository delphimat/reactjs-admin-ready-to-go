import React from "react";

import { LinkContainer } from 'react-router-bootstrap';

import './home.styles.css'

const HomePage = () => {
    return (
        <div className="cover-container d-flex h-100 p-3 mx-auto flex-column home-page-color">
            <header className="masthead mb-auto">
                <div className="inner">
                    <h3 className="masthead-brand">Cover</h3>
                    <nav className="nav nav-masthead justify-content-center">
                        <LinkContainer to="/login">
                            <span className="nav-link active" >Login</span>
                        </LinkContainer>
                    </nav>
                </div>
            </header>

            <main role="main" className="inner cover">
                <h1 className="cover-heading">Cover your page.</h1>
                <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download,
                    edit the text, and add your own fullscreen background photo to make it your own.</p>
                <p className="lead">
                    <a href="#" className="btn btn-lg btn-secondary">Learn more</a>
                </p>
            </main>

            <footer className="mastfoot mt-auto">
                <div className="inner">
                    <p>Cover template for <a href="https://getbootstrap.com/">Bootstrap</a>.</p>
                </div>
            </footer>
        </div>
    )
}

export default HomePage;