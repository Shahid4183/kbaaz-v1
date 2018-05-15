// react rdux
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm,Field } from 'redux-form'
import { Link } from 'react-router-dom'

// material ui
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton'

// components
import InputField from '../components/inputField';

class Signup extends Component {
  render() {
    return (
      <div className="login">
        <Paper className="login-container">
            <div style={{fontSize:20}}>Create an Account</div>
            <form>
            <Field name="firstname" myLabel="First Name" myPlaceHolder="First Name" component={InputField}/>
            <Field name="lastname" myLabel="Last Name" myPlaceHolder="Last Name" component={InputField}/>
            <Field name="phone" myLabel="Phone/Mobile" myType="number" myPlaceHolder="Phone/Mobile" component={InputField}/>
            <Field name="email" myLabel="Email" myPlaceHolder="Email" component={InputField}/>
            <Field name="password" myType="password" myLabel="Password" myPlaceHolder="Password" component={InputField}/>
            <RaisedButton label="Create Account" type="submit" primary={true} 
                style={{ marginTop: 5}}
                buttonStyle={{ background:'#55aa49'}}
                fullWidth={true}
            />
            </form>
            <div
              style={{marginTop:10,fontSize:11, color:'grey'}}
            >Already have an account? <span><Link to="/login" 
              style={{color:'skyblue',textDecoration:'none'}}
            >Login here</Link></span></div>
        </Paper>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({},dispatch)
}

const mapStateToProps = (state) => {
  return {   
  }
}

Signup = reduxForm({
  form:'signup'
})(Signup)

export default connect(mapStateToProps, mapDispatchToProps)(Signup)

