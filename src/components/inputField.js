import React, { Component } from 'react'
import TextField from 'material-ui/TextField';



class InputField extends Component {

    render() {

        return (
    
            <TextField {...this.props.input}
                errorText={this.props.meta.touched ? this.props.meta.error : ''}
                errorStyle={{ lineHeight: 3, top: 55, fontSize: 11, position: 'absolute', bottom: 0 }}
                type={this.props.myType}
                fullWidth={true}
                disabled={this.props.disabled}
                // style={{
                //     border: '1px solid rgb(224, 224, 224)',
                //     height: '50px', 
                //     marginBottom: 20,
                //     borderRadius:6
                // }}
                //underlineStyle={{ bottom: 0 ,borderBottomLeftRadius:6,borderBottomRightRadius:6}}
                floatingLabelFixed={true}
                floatingLabelText={this.props.myPlaceHolder}
                //floatingLabelStyle={{top:25,marginLeft:5}}
               // inputStyle={{marginTop:0,height:65,padding:5}}
           
            />

        )
    }
}

export default InputField;