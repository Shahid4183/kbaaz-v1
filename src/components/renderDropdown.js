import React, { Component } from 'react';
//import SelectField from 'material-ui/SelectField';
import {
    SelectField
} from 'redux-form-material-ui';



class RederDropdown extends Component {

    // state = {
    //     value: "",
    // };

    // handleChange = (event, index, value) => {
    //     this.setState({ value });
        
    // }

    render() {
        
    
        return (
                <SelectField
                    errorText={this.props.meta.touched ? this.props.meta.error : ''}
                    fullWidth={true}
                >
                    {this.props.items}
                </SelectField>
        )
    }
}

export default RederDropdown;