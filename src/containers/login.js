import React, { Component } from 'react'
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

export default class Login extends Component {
  render() {
    return (
      <div className="login">
          <div style={{padding:25}}>
            <Paper>
                <Typography variant="display1">LOGIN</Typography>
            </Paper>
          </div>
      </div>
    )
  }
}
