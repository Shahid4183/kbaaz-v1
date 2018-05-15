import React, { Component } from 'react';

// material ui
import Drawer from 'material-ui/Drawer';
import { List,ListItem } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

// data
import data from '../data'
import LeftBar from '../components/leftbar';
class App extends Component {
  render() {
    return (
      <div>
        <LeftBar/>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
