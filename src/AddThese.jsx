import React, { Component } from 'react'
import ApiService from "./service/ApiService";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class AddTheseComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            title: '',
            profsName: '',
            studentName: '',
            month: '',
            description: '',
        }
        this.saveThese = this.saveThese.bind(this);
    }

    saveThese = (e) => {
        e.preventDefault();
        let user = {title: this.state.title, profsName: this.state.profsName, studentName: this.state.studentName, description: this.state.description, month: this.state.month};
        ApiService.addUser(user)
            .then(res => {
                this.setState({message : 'User added successfully.'});
                this.props.history.push('/users');
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div>
                
                <Typography variant="h4" style={style}>Ajouter une thèse de Doctorat</Typography>
                <Container > 
                <form style={formContainer}>
                
                    <TextField type="text" placeholder="Titre de la thèse" fullWidth margin="normal" name="title" value={this.state.title} onChange={this.onChange}/>

                    <TextField type="text" placeholder="Profs encadrants" fullWidth margin="normal" name="profsName" value={this.state.profs} onChange={this.onChange}/>

                    <TextField placeholder="Etudiants concernés" fullWidth margin="normal" name="studentName" value={this.state.Name} onChange={this.onChange}/>

                    <TextField type="month" placeholder="Année Scolaire" fullWidth margin="normal" name="annee" value={this.state.annee} onChange={this.onChange}/>
                    <TextField placeholder="Description" fullWidth margin="normal" name="description" value={this.state.description} onChange={this.onChange}/>
                    <Button variant="contained" color="primary" onClick={this.saveThese}>Save</Button>
               </form>
               </Container>
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