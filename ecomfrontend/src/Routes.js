import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from './core/Home'
import SignIn from './user/SignIn'
import SignUp from './user/SignUp'
import Dashboard from "./user/userDashboard";
import AdminDashboard from "./user/adminDashboard";
import PrivateRoute from "./auth/PrivateRoute";
import AdminRoute from "./auth/AdminRoute";
const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/signIn" exact component={SignIn}/>
                <Route path="/signUp" exact component={SignUp}/>
                <PrivateRoute path="/user/dashboard" exact component={Dashboard}/>
                <AdminRoute path="/admin/dashboard" exact component={AdminDashboard}/>
            </Switch>
        </BrowserRouter>
    )
}
export default Routes
