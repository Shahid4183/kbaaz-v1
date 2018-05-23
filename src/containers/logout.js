import React, { Component } from 'react';

class Logout extends Component {
    
    componentWillMount() {
        this.props.history.push('/')
    }
    
    render() {
        return null
    }
}

export default Logout   ;
