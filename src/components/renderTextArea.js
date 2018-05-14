import React, { Component } from 'react'
import TextField from 'material-ui/TextField';

class RederTextarea extends Component {
    render() {
        return (
                <TextField {...this.props.input}
                    errorText={this.props.meta.touched ? this.props.meta.error : ''}
                    errorStyle={{ fontSize: 11, position: 'absolute', bottom: -13 }}
                    fullWidth={true}
                    multiLine={true}
                    // rows={2}
                     rowsMax={4}
                    // style={{
                    //     border: '1px solid rgb(224, 224, 224)',
                    //     height: '50px',
                    //     marginBottom: 20,
                    //     borderRadius: 6
                    // }}
                    disabled={this.props.disabled}
                    floatingLabelText={this.props.myPlaceHolder}
                    floatingLabelFixed={true}
                    floatingLabelStyle={{top:25,marginLeft:5}}
                    underlineStyle={{ bottom: 0 ,borderBottomLeftRadius:6,borderBottomRightRadius:6}}
                    textareaStyle={{marginTop:30,padding:5}}
                />
        )
    }
}

export default RederTextarea;