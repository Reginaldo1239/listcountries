import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  Redirect,
  HashRouter 
} from "react-router-dom";
import Home from '../pages/home';
import DetailCountry from '../pages/detailCountry'

export default function Routers(){
    return(
        <HashRouter basename='/listcountries'>
        <Router>
            <Switch> 
                 <Route exact={true} path='/' component={Home} ></Route>
                 <Route path='/listcountries/detail_country/:name' component={DetailCountry}></Route>
             
            </Switch>
        </Router>   
        </HashRouter>
    ) 
}    