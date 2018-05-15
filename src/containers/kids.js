import React, { Component } from 'react';

// material ui
import TextField from 'material-ui/TextField'
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import Add from 'material-ui/svg-icons/content/add'

const styles = {
    searchFieldFocusIn:{
        border:'1px solid skyblue',
        borderRadius:50,
        padding:'0 20px 0 20px',
        marginTop:20
    },
    searchFieldFocusOut:{
        border:'1px solid #ECF2F4',
        borderRadius:50,
        padding:'0 20px 0 20px',
        marginTop:20
    }
}

class Kids extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchFieldFocus:false
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
                    <h2>KIDS</h2>
                    <List>
                        <ListItem primaryText="First Kid" leftAvatar={<Avatar src="platformimages/user.png" backgroundColor="white"/>} secondaryText="ACCOUNT_1">
                            <span style={{float:'right'}}>
                                <div>$XXX.XX</div>
                                <div style={{color:"#726B6B"}}>Saved Today</div>
                            </span>
                        </ListItem>
                        <ListItem primaryText="Second Kid" leftAvatar={<Avatar src="platformimages/user.png" backgroundColor="white"/>} secondaryText="ACCOUNT_2">
                            <span style={{float:'right'}}>
                                <div>$XXX.XX</div>
                                <div style={{color:"#726B6B"}}>Saved Today</div>
                            </span>
                        </ListItem>
                    </List>
                    <RaisedButton
                        label="Add new kid"
                        icon={<Add/>}
                        labelPosition="after"
                        labelStyle={{
                            color:'skyblue',
                            borderColor:'skyblue'
                        }}
                        buttonStyle={{
                            border:'1px solid skyblue'
                        }}                            
                    />
                </div>
            </div>
        );
    }
}

export default Kids;
