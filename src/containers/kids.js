// react redux
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm,Field, reset } from 'redux-form'

// material ui
import TextField from 'material-ui/TextField'
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import Add from 'material-ui/svg-icons/content/add'
import { SelectField,DatePicker } from 'redux-form-material-ui';
import MenuItem from 'material-ui/MenuItem';
import moment from 'moment'

// components
import InputField from '../components/inputField';
import data from '../data'

// actions
import { SetInitialValues } from '../actions/common_actions'

var NotificationSystem = require('react-notification-system');
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

var notificationStyle = {
  NotificationItem: { // Override the notification item
    DefaultStyle: { // Applied to every notification, regardless of the notification level
      paddingLeft:'50px'
    },
  }
}

class Kids extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchFieldFocus:false,
            showList:true,
            dataList:[]
        }
    }
    componentWillMount() {
        this.setState({dataList:data.kids})
    }
    componentDidMount(){
        let searchField = document.getElementById('searchfiled');
        searchField.addEventListener('focusin',e => this.setState({searchFieldFocus:true}))
        searchField.addEventListener('focusout',e => this.setState({searchFieldFocus:false}))
        this._notificationSystem = this.refs.notificationSystem;
    }
    searchFieldFocusListener = (event)=>{
    }
    _addNotification = (e, title,message) => {
        this._notificationSystem.addNotification({
            title:title,
            message: message,
            level: 'success',
            position:'br',
            autoDismiss: 5,
            update:false
        })
    }
    onChange = (event,value)=>{        
        let dataList = data.kids.filter((item,index)=>{
                 if(item.firstname.toLowerCase().match(value.toLowerCase())||item.lastname.toLowerCase().match(value.toLowerCase()))
                     return item
                 })
       this.setState({
           dataList:dataList?dataList:data.kids
       }) 
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
                    onChange={this.onChange}
                />
                <div className="custom-container">
                {
                    this.state.showList ?
                        <div>
                            <h2>KIDS</h2>
                            <List>
                                {
                                    this.state.dataList  ? 
                                    this.state.dataList.map((item,index)=>{
                                        return(
                                            <ListItem 
                                                key={index}
                                                primaryText={`${item.firstname} ${item.lastname}`} 
                                                leftAvatar={<Avatar src="platformimages/user.png" backgroundColor="white"/>} 
                                                secondaryText={item.accountno}
                                                onClick={e=>{
                                                    this.props.SetInitialValues(item)
                                                    this.setState({showList:false,update:true})
                                                }}
                                            >
                                                <span style={{float:'right'}}>
                                                    <div>{`$${item.balance}`}</div>
                                                    <div style={{color:"#726B6B"}}>Saved {moment(item.created_at,"MM/DD/YYYY").fromNow()}</div>
                                                </span>
                                            </ListItem>
                                        )
                                    }):null
                                }                                
                            </List>
                            <RaisedButton
                                label="Add new kid"
                                icon={<Add/>}
                                labelPosition="after"
                                labelStyle={{
                                    color:'#00BAD5',
                                    borderColor:'#00BAD5'
                                }}
                                buttonStyle={{
                                    border:'1px solid #00BAD5'
                                }}    
                                onClick={e=>{
                                    this.props.SetInitialValues(undefined)
                                    this.setState({showList:false,update:false})
                                }}                        
                            />
                        </div>
                    :
                      <div style={{padding:'10px 50px 50px 50px'}}>
                            <form>
                                <h3>New Kid</h3>
                                <div className="row">
                                    <div className="col-xs">
                                        <div className="box">
                                            <Field name="firstname" myLabel="First Name" myPlaceHolder="First Name" component={InputField}/>
                                        </div>
                                    </div>
                                    <div className="col-xs">
                                        <div className="box">
                                            <Field name="lastname" myLabel="Last Name" myPlaceHolder="Last Name" component={InputField}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs">
                                        <div className="box">
                                            <Field name="dob" floatingLabelText="Date of Birth" component={DatePicker} fullWidth={true}/>
                                        </div>
                                    </div>
                                    <div className="col-xs">
                                        <div className="box">
                                            <Field name="gender" hintText="Gender" floatingLabelText="Gender" fullWidth={true} component={SelectField}>
                                                <MenuItem value="male" primaryText="Male"/>
                                                <MenuItem value="female" primaryText="Female"/>
                                                <MenuItem value="other" primaryText="Other"/>
                                            </Field>
                                        </div>
                                    </div>
                                </div>

                                <h3>Savings Account</h3>
                                <Field name="accountno" myLabel="Account Number" myPlaceHolder="Account Number" component={InputField}/>

                                <h3>Administrator Mailing Address</h3>
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
                                    label={this.state.update? "Update":"Save"}
                                    labelStyle={{
                                        color:'#00BAD5',
                                    }}
                                    buttonStyle={{
                                        border:'1px solid #00BAD5'
                                    }}         
                                    onClick={e=>{
                                        this.state.update ?
                                        this._addNotification(e,"Updated!","Child saved successfully"):
                                        this._addNotification(e,"Created!","Child saved successfully")
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
                <NotificationSystem ref="notificationSystem" style={notificationStyle}/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ SetInitialValues,reset }, dispatch)
}

const mapStateToProps = (state) => {
	return {
        initialValues:state.common.data
    }
}

Kids = reduxForm({
    form: 'kids',
    enableReinitialize: true,
})(Kids)

export default connect(mapStateToProps, mapDispatchToProps)(Kids)
