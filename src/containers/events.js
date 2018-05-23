// react redux
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm,Field } from 'redux-form'

// material ui
import TextField from 'material-ui/TextField'
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import Add from 'material-ui/svg-icons/content/add'
import { DatePicker } from 'redux-form-material-ui';
import RederTextarea from '../components/renderTextArea'

// components
import InputField from '../components/inputField';

const styles = {
    searchFieldFocusIn:{
        border:'1.5px solid #00BAD5',
        borderRadius:50,
        padding:'0 20px 0 20px',
        marginTop:20
    },
    searchFieldFocusOut:{
        border:'1px solid rgba(102, 102, 102,0.5)',
        borderRadius:50,
        padding:'0 20px 0 20px',
        marginTop:20
    }
}

class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchFieldFocus:false,
            showList:true
        }
    }
    
    componentDidMount(){
        let searchField = document.getElementById('searchfiled');
        searchField.addEventListener('focusin',e => this.setState({searchFieldFocus:true}))
        searchField.addEventListener('focusout',e => this.setState({searchFieldFocus:false}))
    }
    searchFieldFocusListener = (event)=>{
    }
    render() {
        return (
            <div className="content-holder">
                <TextField
                    id="searchfiled"
                    hintText="Search"
                    fullWidth={true}
                    underlineShow={false}
                    style={this.state.searchFieldFocus? styles.searchFieldFocusIn : styles.searchFieldFocusOut}
                />
                <div className="custom-container">
                {
                    this.state.showList ?
                        <div>
                            <h2>Events</h2>
                            <List>
                                <ListItem primaryText="First Event" leftAvatar={<Avatar src="platformimages/user.png" backgroundColor="white"/>} secondaryText="this is sample description of this event">
                                    <span style={{float:'right'}}>
                                        <div style={{color:"#726B6B"}}>21-May-2018</div>
                                    </span>
                                </ListItem>
                                <ListItem primaryText="Second Event" leftAvatar={<Avatar src="platformimages/user.png" backgroundColor="white"/>} secondaryText="this is sample description of this event">
                                    <span style={{float:'right'}}>
                                        <div style={{color:"#726B6B"}}>26-June-2018</div>
                                    </span>
                                </ListItem>
                            </List>
                            <RaisedButton
                                label="Add new event"
                                icon={<Add/>}
                                labelPosition="after"
                                labelStyle={{
                                    color:'#00BAD5',
                                    borderColor:'#00BAD5'
                                }}
                                buttonStyle={{
                                    border:'1px solid #00BAD5'
                                }}    
                                onClick={e=>this.setState({showList:false})}                        
                            />
                        </div>
                    :
                      <div style={{padding:'10px 50px 50px 50px'}}>
                            <form>
                                <h3>Create Event</h3>
                                <div className="row">
                                    <div className="col-xs">
                                        <div className="box">
                                            <Field name="eventname" myPlaceHolder="Event Name" component={InputField}/>
                                        </div>
                                    </div>
                                    <div className="col-xs">
                                        <div className="box">
                                            <Field name="description" myPlaceHolder="Event Description" component={RederTextarea}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-6">
                                        <div className="box">
                                            <Field name="doe" floatingLabelText="Event Date" component={DatePicker} fullWidth={true}/>
                                        </div>
                                    </div>
                                </div>

                                <h3>Event Location</h3>
                                <div className="row">
                                    <div className="col-xs">
                                        <div className="box">
                                            <Field name="locationname" myPlaceHolder="Location Name" component={InputField}/>
                                        </div>
                                    </div>
                                    <div className="col-xs">
                                        <div className="box">
                                            <Field name="state" myPlaceHolder="State" component={InputField}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs">
                                        <div className="box">
                                            <Field name="street" myPlaceHolder="Street" component={InputField}/>
                                        </div>
                                    </div>
                                    <div className="col-xs">
                                        <div className="box">
                                            <Field name="zipcode" myPlaceHolder="Zipcode" component={InputField}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-6">
                                        <div className="box">
                                            <Field name="city" myPlaceHolder="City" component={InputField}/>
                                        </div>
                                    </div>
                                </div>
                                <RaisedButton
                                    label="Save"
                                    labelStyle={{
                                        color:'#00BAD5',
                                    }}
                                    buttonStyle={{
                                        border:'1px solid #00BAD5'
                                    }}                            
                                />  
                                <RaisedButton
                                    style={{marginLeft:10}}
                                    label="Cancel"
                                    onClick = {e=>this.setState({showList:true})}
                                    buttonStyle={{
                                        border:'1px solid'
                                    }}
                                />  
                            </form>
                      </div>
                }        
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({}, dispatch)
}

const mapStateToProps = (state) => {
	return {}
}

Events = reduxForm({
    form: 'kids',
    enableReinitialize: true,
})(Events)

export default connect(mapStateToProps, mapDispatchToProps)(Events)
