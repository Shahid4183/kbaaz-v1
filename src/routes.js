import React, { Component } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom'
import Login from './containers/login'
class Routes extends Component {
    render(){
        return(
            <HashRouter>
                <div>
                    <Switch>
                        <Route exact path="/" component={Login} />
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}

export default Routes