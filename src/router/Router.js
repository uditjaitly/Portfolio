import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Experience from '../pages/Experience/Experience'
import About from '../pages/About/About'
import MyNavbar from '../components/Navbar/Navbar'
const Router = () =>{
    return(
        <BrowserRouter>
            <div>
                <MyNavbar></MyNavbar>
            </div>
            <Switch>
                <Route path="/" exact={true} component={About}></Route>
                <Route path="/skills" exact={true} component={About}></Route>
                <Route path="/experience" exact={true} component={Experience}></Route>
            </Switch>
        
        </BrowserRouter>

    )
}

export default Router