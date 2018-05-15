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

class Login extends Component {
  render() {
    return (
      <div className="login">
        <Paper className="login-container">
            <div style={{fontSize:20}}>Login into your Account</div>
              <form>
                <Field name="username" myLabel="Email" myPlaceHolder="Email" component={InputField}/>
                <Field name="password" myType="password" myLabel="Password" myPlaceHolder="Password" component={InputField}/>
                <RaisedButton label="Login" type="submit" primary={true} 
                    style={{ marginTop: 5}}
                    buttonStyle={{ background:'#55aa49'}}
                    fullWidth={true}
                />
              </form>
            <div
              style={{marginTop:10,fontSize:11, color:'grey'}}
            >Not registered? <span><Link to="/signup" 
              style={{color:'skyblue',textDecoration:'none'}}
            >Create an account</Link></span></div>
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

Login = reduxForm({
  form:'login'
})(Login)

export default connect(mapStateToProps, mapDispatchToProps)(Login)

