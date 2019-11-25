
/*import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./login.component";
import SignUp from "./signup.component";

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
} 

export default App;  */ 

/*import React, { Component } from 'react';
//import FileUploadComponent from './File.js';  
import FormPage from './FormPage.js'


class App extends Component {
  render() {
    return (
      //< FileUploadComponent/>
      <FormPage /> 
    )
  }
} 
export default App;  */ 

import React, { Component } from 'react';
//import FileUploadComponent from './File.js';  
//import FormInputs  from './FormPage.js'; 
import Acceuil from './Acceuil.js';
import Login from './login.component.js' ; 
import SignUp from './signup.component.js' ; 
import AddTheseComponent from './AddThese.jsx';
import ListTheseComponent from './AfficherThese.jsx'; 
import EditUserComponent from './EditThese.jsx'; 
import NavBar from './NavBar.jsx'; 
import Container from '@material-ui/core/Container';
import SideBar from './SideBar.jsx'; 
import './App.css'; 
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';

    const App = (props) => {
      return (
        <Router>
           
            <Switch>
              <Route exact path="/" component={Acceuil} />
              <Route path="/Login" component={Login}/>
              <Route path="/SignUp" component={SignUp}/>
              <Route path="/Add" component={AddTheseComponent}/>
              <Route path="/List" component={ListTheseComponent} />
              
    
            </Switch>
        </Router>
      );
    };
   /* class App extends Component {
      render()
      {
        return (
          <SignUp> </SignUp>

        );
      }
    }*/ 
export default App; 