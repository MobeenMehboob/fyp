import React, { Component } from "react"
import { Route, Router, Switch, Link } from 'react-router-dom';
import adminlogin from './components/admin/adminlogin';
import adminpanal from './components/admin/adminpanal';

import expertsignp from './components/experts/expertsignup';
import expertlogin from './components/experts/expertlogin';
import expertpanal from './components/experts/expertpanal';

import farmersignup from './components/farmer/farmersignup';
import farmerlogin from './components/farmer/farmerlogin';
import farmerpanal from './components/farmer/farmerpanal';

import companypanal from './components/companies/companypanal';
import companylogin from './components/companies/companylogin';
import companysignup from './components/companies/companysignup';

import buyerpanal from './components/buyer/buyerpanal';
import buyerlogin from './components/buyer/buyerlogin';
import buyersignup from './components/buyer/buyersignup';
import Home from './Home';



import History from './History';

class Routers extends Component {
    render() {

        return (
            <div>
                <Router history={History}>
                    <Switch>

                        <Route path="/" component={Home}>home</Route>

                        <Route path="./components/admin/adminlogin" component={adminlogin}>admin login </Route>
                        <Route path="./components/admin/adminpanal" component={adminpanal}>admin panal </Route>

                        <Route path="./experts/expertsignup" component={expertsignp}>expert signup </Route>
                        <Route path="./experts/expertlogin" component={expertlogin}>experst login </Route>
                        <Route path="./experts/expertpanal" component={expertpanal}>expert panal </Route>

                        <Route path="./farmer/farmersignup" component={farmersignup}>farmer signup </Route>
                        <Route path="./farmer/farmerlogin" component={farmerlogin}>farmer login </Route>
                        <Route path="./farmer/farmerpanal" component={farmerpanal}>farmer panal </Route>


                        <Route path="./companies/companylogin" component={companylogin}>companies login </Route>
                        <Route path="./companies/companysignup" component={companysignup}>companies signup </Route>
                        <Route path="./companies/companypanal" component={companypanal}>companies panal </Route>


                        <Route path="./buyer/buyersignup" component={buyersignup}>buyer signup </Route>
                        <Route path="./buyer/buyerlogin" component={buyerlogin}>buyer login </Route>
                        <Route path="./buyer/buyerpanal" component={buyerpanal}>buyer panal </Route>







                    </Switch>
                </Router>
               
            </div>
        )

    }

} export default Routers;