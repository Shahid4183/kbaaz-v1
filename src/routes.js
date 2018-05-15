    import React, { Component } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom'

// containers
import Login from './containers/login'
import Signup from './containers/signup';
import App from './containers/app'
import Events from './containers/events';
import Kids from './containers/kids';
import Contacts from './containers/contacts';
class Routes extends Component {
    render(){
        return(
            <HashRouter>
                <div>
                <Switch>
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/" component={Login} />
                    <Route exact path="/login" component={Login} />
                    <App>
                        <Route exact path="/kids" component={Kids} />
                        <Route exact path="/events" component={Events} />
                        <Route exact path="/contacts" component={Contacts} />
                    </App>
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}

export default Routes