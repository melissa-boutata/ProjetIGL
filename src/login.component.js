import React, { Component } from "react";
import './App.css'; 
import NavBar from './NavBar.jsx'; 
import axios from 'axios'; 
import { Link } from 'react-router-dom'; 

 

/**
 *  Classe Login qui permet à l'utilisateur de se connecter au système 
 */
export default class Login extends Component {

/**
 * @constructor
 */
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password: ''
        }
    } 
     
/**
 *  Permet à l'utilisateur de s'authentifier après avoir cliquer sur le bouton "se connecter"
 *  @throws {NotFoundError} Dans le cas où l'utilisateur n'existe pas dans le système
 */
/*
     onSubmit(e)
     {
        e.preventDefault();
        const {email , password} = this.state ;
        axios.post('api/login', {
            email,
            password
          })
          .then(response=> {
            this.setState({err: false});
            this.props.history.push("/AfficherThese") ;

          })
          .catch(error=> {
            this.refs.email.value="";
            this.refs.password.value="";
            this.setState({err: true});
          });
     }

     onChange(e)
     {
        const {name, value} = e.target;
        this.setState({[name]: value});
     } 
    render() 
    {
        let error = this.state.err ;
        console.log(error);
        let msg = (!error) ? 'Login Successful' : 'Wrong Credentials' ;
        let name = (!error) ? 'alert alert-success' : 'alert alert-danger' ;
        return (

            <div className="auth-wrapper">
                <NavBar/>
            <div className="auth-inner">
            <div className="col-md-offset-2 col-md-8 col-md-offset-2">
                {error != undefined && <div className={name} role="alert">{msg}</div>}
            </div>
            <form  role="form" method="POST" onSubmit= {this.onSubmit.bind(this)}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label for='email'>Email address</label>
                    <input id="email" type="email"  ref="email" className="form-control" name="email" placeholder="Enter email" hintText="Enter your Username"
                    onChange={this.onChange.bind(this)} required />
                </div>

                <div className="form-group">
                    <label for='password'>Password</label>
                    <input id="password" type="password" ref="password"  name="password"  className="form-control" placeholder="Enter password"
                     onChange={this.onChange.bind(this)}  required  />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" name="remember"/>
                        <label className="custom-control-label" htmlfor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" id="log">Submit</button>
                <p className="forgot-password text-right">
                  Don't have an account?<Link className="forgot-password text-right" to="/SignUp" > Create an account </Link>
                </p>
            </form>
            </div>
            </div>
        );
    }
} } */ 

} 