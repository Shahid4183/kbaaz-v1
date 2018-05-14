import React, { Component } from 'react'
import Checkbox from 'material-ui/Checkbox';


const Error = {
    color: 'rgb(244, 67, 54)',
    fontSize: 11,
    position: 'absolute'
}

class RenderCheckbox extends Component {
    render() {
        return (
            <div>
                <div>

                    <label className="checkBoxContainer">
                        {this.props.input.value ? <input type="checkbox" {...this.props.input} checked /> : <input type="checkbox" {...this.props.input} />}
                        <span className="checkmark"></span>
                    </label>
                    <div style={{ position: 'relative', width: '80%', left: '25px', lineHeight: '13px' }}> {this.props.myLabel}</div>


                    {/* <Checkbox {...this.props.input}
                        label={this.props.myLabel}
                        style={this.props.myStyle.checkRemember.style}
                        labelStyle={this.props.myStyle.checkRemember.labelStyle}
                        iconStyle={this.props.myStyle.checkRemember.iconStyle}
                    /> */}
                    <span style={Error}>{this.props.meta.touched ? this.props.meta.error : ''}</span>
                </div>

            </div>
        )
    }
}

export default RenderCheckbox;