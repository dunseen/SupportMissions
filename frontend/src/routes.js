import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';

/*const PrivateRoute = ({component: Component},...rest) =>{
  <Route {...rest} render={props =>(
    

  )} />

}
*/

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} ></Route>
        <Route path="/home" component={Home} ></Route>
        <Route path="/register" component={Register} ></Route>
      </Switch>
    </BrowserRouter>
  )


}