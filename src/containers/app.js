import React, { Component } from 'react';
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
