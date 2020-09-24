import React from "react";

import { Route } from 'react-router-dom';


import NavBar from "../../components/dashboard/navbar/navbar.component";
import SideBar from "../../components/dashboard/sidebar/sidebar.component";

import BlogDashboard from "../../components/dashboard/blog/blog.components";
import CarouselDashboard from "../../components/dashboard/carousel/carousel.components";
import OrderForm from "../../components/dashboard/forms/orders/form-orders.component";
import ProductsChart from "../../components/dashboard/charts/products/charts-products.component";
import TableDashboard from "../../components/dashboard/tables/table.components";


import './dashboard.styles.css';


const DashBoardPage = ({history}) => {

    return (<>
        <NavBar/>

        <div className="container-fluid main-app-color">
            <div className="row">
                <SideBar history={history}  />

                <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                    <Route path='/backend/blog' component={BlogDashboard} />
                    <Route path='/backend/carousel' component={CarouselDashboard} />
                    <Route path='/backend/order' component={OrderForm} />
                    <Route path='/backend/products' component={TableDashboard} />
                    <Route path='/backend/form' component={ProductsChart} />
                </main>
            </div>
        </div>
    </>);
}

export default DashBoardPage;