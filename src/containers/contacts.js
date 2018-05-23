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

class ContactUs extends Component {
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
                            <h2>Contacts</h2>
                            <List>
                                <ListItem primaryText="Charlie Chaplin" leftAvatar={<Avatar src="platformimages/user.png" backgroundColor="white"/>}>
                                    <span style={{float:'right'}}>
                                        <div style={{color:"#726B6B"}}>awesome@dre.com</div>
                                        <div style={{color:"#726B6B"}}>12123654789</div>
                                    </span>
                                </ListItem>
                                <ListItem primaryText="T Pain" leftAvatar={<Avatar src="platformimages/user.png" backgroundColor="white"/>}>
                                    <span style={{float:'right'}}>
                                        <div style={{color:"#726B6B"}}>charlie@chaplin.com</div>
                                        <div style={{color:"#726B6B"}}>12123654789</div>
                                    </span>
                                </ListItem>
                            </List>
                            <RaisedButton
                                label="Add new contact"
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
                      <div style={{padding:50}}>
                            <form>
                                <h3>New Contact</h3>
                                <div className="row">
                                    <div className="col-xs">
                                        <div className="box">
                                            <Field name="firstname" myLabel="First Name" myPlaceHolder="First Name" component={InputField}/>
                                        </div>
                                        <div className="box">
                                            <Field name="lastname" myLabel="Last Name" myPlaceHolder="Last Name" component={InputField}/>
                                        </div>
                                        <div className="box">
                                            <Field name="email" myLabel="Email" myPlaceHolder="Email" component={InputField}/>
                                        </div>
                                        <div className="box">
                                            <Field name="phone" myLabel="Phone" myPlaceHolder="Phone" component={InputField}/>
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

ContactUs = reduxForm({
    form: 'contactus',
    enableReinitialize: true,
})(ContactUs)

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs)
