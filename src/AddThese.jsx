import React, { Component } from 'react'
import ApiService from "./service/ApiService";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import NavBar from './NavBar.jsx'; 
import SideBar from './SideBar.jsx' 
import axios from 'axios';

import './App.css'; 
/**
 *  Classe  AddTheseComponent qui permet d'ajouter une thèse
 */

class AddTheseComponent extends Component{

    /**
    * @constructor
    */
    constructor(props){
        super(props);
        this.state ={
            title: '',
            profsName: '',
            studentName: '',
            month: '',
            description: ''
        }
        this.saveThese = this.saveThese.bind(this);
        //this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onChange= this.onChange.bind(this); 
        //this.fileUpload = this.fileUpload.bind(this)
    }
   

    /**
    *  Méthode qui joute une these et met à jour l'état du composant 
    */
 
    saveThese (e) {
        /*
        e.preventDefault();
        let these = {title: this.state.title, profsName: this.state.profsName, studentName: this.state.studentName, description: this.state.description, month: this.state.month};
     
           axios.post('api/add',these)
            .then(res => {
                this.setState({message : 'These added successfully.'});
                this.props.history.push('/List');
            })
        
            .catch(error=>{
                this.refs.title.value="";
                this.refs.description.value="";
                this.refs.month.value="";
                this.refs.profsName.value="";
                this.refs.studentName.value="";
                this.setState({err: true});
              });*/ 
              this.props.history.push('/');

         }

    onChange (e) {

        this.setState({ [e.target.name]: e.target.value });
    }
        
    render() {
        return(
            <div>
             <SideBar/>
            <div className="auth-wrapper">
            <div className="auth-these">
            <Typography component="h4" variant="h4" align="center" color="textPrimary" gutterBottom>
                Ajouter une thèse de Doctorat
            </Typography>
                <form style={formContainer}>
                
                    <TextField id="title" type="text" placeholder="Titre de la thèse" fullWidth margin="normal" name="title" value={this.state.title} onChange={this.onChange}/>

                    <TextField id="prof" type="text" placeholder="Profs encadrants" fullWidth margin="normal" name="profsName" value={this.state.profs} onChange={this.onChange}/>

                    <TextField id="etud" placeholder="Etudiants concernés" fullWidth margin="normal" name="studentName" value={this.state.Name} onChange={this.onChange}/>

                    <TextField id="month" type="month" placeholder="Année Scolaire" fullWidth margin="normal" name="month" value={this.state.annee} onChange={this.onChange}/>
                    <TextField id="description" placeholder="Description" fullWidth margin="normal" name="description" value={this.state.description} onChange={this.onChange}/>

                    <Button id="send" type ="submit" variant="contained" color="primary" onClick={this.saveThese}>Enregistrer</Button>

               </form>
               </div> 
               </div> 
              

           </div>
        );
    }
}
 const formContainer = {
    display: 'flex',
    flexFlow: 'row wrap'
};

const style ={
    display: 'flex',
    justifyContent: 'center'

}


export default AddTheseComponent;