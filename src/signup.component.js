import React, { Component } from "react";
import './App.css'; 
import NavBar from './NavBar'; 
import Login from './login.component.js'; 
import axios from 'axios'; 
import { Link } from 'react-router-dom'; 

export default class SignUp extends Component {
    constructor(props){
        super(props);
        this.state={
          first_name:'',
          last_name:'',
          email:'',
          password:''
        }
      } 
      onSubmit(e){
        e.preventDefault();
        const {first_name,last_name, email, password} = this.state ;
        axios.post('api/register', {
            first_name,
            last_name,
            email,
            password
          })
          .then(response=> {
           this.setState({err: false});
           this.props.history.push("home") ;
          })
          .catch(error=> {
            this.refs.first_name.value="";
            this.refs.last_name.value="";
            this.refs.password.value="";
            this.refs.email.value="";
            this.setState({err: true});
          });
     }

     onChange(e){
        const {name, value} = e.target ;
        this.setState({[name]: value});
     }
     
    render() { 
      let error = this.state.err ;
      let msg = (!error) ? 'Registered Successfully' : 'Oops! , Something went wrong.' ;
      let name = (!error) ? 'alert alert-success' : 'alert alert-danger' ;
        return (
          <div className="Container"> 
          <NavBar> </NavBar>>=
          <div className="auth-wrapper">

           <div className="auth-inner">
            <div className="col-md-offset-2 col-md-8 col-md-offset-2">
                {error != undefined && <div className={name} role="alert">{msg}</div>}
            </div>   
            <form  role="form" method="POST" onSubmit= {this.onSubmit.bind(this)}>
                <h3>Sign Up</h3>
              
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name"  floatingLabelText="First Name"
             ref="last_name" name="last_name" onChange={this.onChange.bind(this)} required autofocus/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name"  floatingLabelText="Last Name"
              ref="last_name" name="last_name" onChange={this.onChange.bind(this)} required autofocus />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" floatingLabelText="Email"
             ref="email" name="email" onChange={this.onChange.bind(this)} required  />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" floatingLabelText="Password"
              ref="password" name="password" onChange={this.onChange.bind(this)} required />
                </div>

                <button type="submit" className="btn btn-primary btn-block" id="log">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <Link className="forgot-password text-right" to="/Login" > Sign in </Link>
                </p>
            </form>
            </div> 
            </div> 
            </div>
        );
    }
}


