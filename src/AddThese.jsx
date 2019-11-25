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

class AddTheseComponent extends Component{

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
   
     
    saveThese (e) {
        e.preventDefault();
        let these = {title: this.state.title, profsName: this.state.profsName, studentName: this.state.studentName, description: this.state.description, month: this.state.month};
     
           axios.post('api/add',these)
            .then(res => {
                this.setState({message : 'These added successfully.'});
                this.props.history.push('/');
            })
            .catch(error=>{
                this.refs.title.value="";
                this.refs.description.value="";
                this.refs.month.value="";
                this.refs.profsName.value="";
                this.refs.studentName.value="";
                this.setState({err: true});
              });
         }

    onChange (e) {

        this.setState({ [e.target.name]: e.target.value });
    }
        



        /*File méthode 
          onChange1(e) {
            let files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                  return;
            this.createImage(files[0]);
          }
          createImage(file) {
            let reader = new FileReader();
            reader.onload = (e) => {
              this.setState({
                image: e.target.result
              })
            };
            reader.readAsDataURL(file);
          }
          fileUpload(image){
            const formData = {file: this.state.image}
           /* return  post(url,formData)
                    .then(response => console.log(response))
            ApiService.addFile(formData)
            .then(res => {
                this.setState({message : 'File added successfully.'});
                 <input type="file"  onChange={this.onChange1} />
            });
          } 
            */ 
        
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
                
                    <TextField type="text" placeholder="Titre de la thèse" fullWidth margin="normal" name="title" value={this.state.title} onChange={this.onChange}/>

                    <TextField type="text" placeholder="Profs encadrants" fullWidth margin="normal" name="profsName" value={this.state.profs} onChange={this.onChange}/>

                    <TextField placeholder="Etudiants concernés" fullWidth margin="normal" name="studentName" value={this.state.Name} onChange={this.onChange}/>

                    <TextField type="year" placeholder="Année Scolaire" fullWidth margin="normal" name="annee" value={this.state.annee} onChange={this.onChange}/>
                    <TextField placeholder="Description" fullWidth margin="normal" name="description" value={this.state.description} onChange={this.onChange}/>

                    <Button id="send" variant="contained" color="primary" onClick={this.saveThese}>Enregistrer</Button>

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