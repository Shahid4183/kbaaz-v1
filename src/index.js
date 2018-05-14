import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from 'material-ui/styles';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Routes from './routes'

// styles, themes and css
import './styles/main.css';
import 'font-awesome/css/font-awesome.css';
import 'flexboxgrid/css/flexboxgrid.css';
import ThemeDefault from './styles/theme-default';

import Store from './store' 
//Needed for onTouchTap
injectTapEventPlugin();

ReactDOM.render(
    <Provider store={Store}>
        <MuiThemeProvider theme={ThemeDefault}>
            <Routes/>
        </MuiThemeProvider>
    </Provider>
, document.getElementById('root'));
