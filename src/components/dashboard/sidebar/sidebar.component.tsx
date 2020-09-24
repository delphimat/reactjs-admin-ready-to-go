import React from "react";

import { LinkContainer } from 'react-router-bootstrap';
import { HouseDoor, Cart, BadgeAd,Camera, Table , GraphUp } from 'react-bootstrap-icons';

import './sidebar.component.css';

const SideBar = (props) => {

    console.log("display history");
    console.log(props.history);

    return (
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <LinkContainer to="/backend">
                            <span className="nav-link active">
                                <HouseDoor />
                                Dashboard
                            </span>
                        </LinkContainer>
                    </li>
                    <li className="nav-item">
                        <LinkContainer to="/backend/carousel">
                            <span className="nav-link">
                                <Camera/>
                                Carousel
                            </span>
                        </LinkContainer>
                    </li>
                    <li className="nav-item">
                        <LinkContainer to="/backend/blog">
                            <span className="nav-link" >
                                 <Cart/>
                                Blog
                            </span>
                        </LinkContainer>
                    </li>
                    <li className="nav-item">
                        <LinkContainer to="/backend/order">
                            <span className="nav-link" >
                               <GraphUp />
                                Orders
                            </span>
                        </LinkContainer>
                    </li>
                    <li className="nav-item">
                        <LinkContainer to="/backend/products">
                            <span className="nav-link" >
                                <Table/>
                                Products
                            </span>
                        </LinkContainer >
                    </li>

                </ul>

                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>Saved reports</span>
                    <a className="d-flex align-items-center text-muted" >
                        <span data-feather="plus-circle"></span>
                    </a>
                </h6>
                <ul className="nav flex-column mb-2">
                    <li className="nav-item">
                        <LinkContainer to="/backend/form">
                            <span className="nav-link" >
                               <BadgeAd/>
                                Reporting
                            </span>
                        </LinkContainer>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default SideBar;