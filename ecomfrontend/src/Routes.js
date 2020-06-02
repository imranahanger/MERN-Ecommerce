import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from './core/Home'
import SignIn from './user/SignIn'
import SignUp from './user/SignUp'
const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/signIn" exact component={SignIn}/>
                <Route path="/signUp" exact component={SignUp}/>
            </Switch>
        </BrowserRouter>
    )
}
export default Routes
