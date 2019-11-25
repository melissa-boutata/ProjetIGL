import React, { Component } from 'react'
import ApiService from "./service/ApiService";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import NavBar from './NavBar.jsx';

class EditUserComponent extends Component {

    constructor(props){
        super(props);
        this.state ={
            id: '',
            title: '',
            profsName: '',
            studentName: '',
            month: '',
            description: '',
        }
        this.saveUser = this.saveUser.bind(this);
        this.loadUser = this.loadUser.bind(this);
    }

    componentDidMount() {
        this.loadUser();
    }

    loadUser() {
        ApiService.fetchUserById(window.localStorage.getItem("userId"))
            .then((res) => {
                let user = res.data.result;
                this.setState({
                id: user.id,
                title: user.title,
                profsName: user.profsName,
                studentName: user.studentName,
                month: user.month,
                description: user.description,
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveUser = (e) => {
        e.preventDefault();
        let user = {id: this.state.id, title: this.state.title, profsName: this.state.profsName, studentName: this.state.studentName, description: this.state.description, month: this.state.month};
        ApiService.editUser(user)
            .then(res => {
                this.setState({message : 'Thèse added successfully.'});
                this.props.history.push('/users');
            });
    }

    render() {
        return (
           
            <div>
                 <NavBar/> 
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Modifier thèse
            </Typography>
                <form>

                <TextField type="text" placeholder="Titre de la thèse" fullWidth margin="normal" name="title" value={this.state.title} onChange={this.onChange}/>

                 <TextField type="text" placeholder="Profs encadrants" fullWidth margin="normal" name="profsName" value={this.state.profs} onChange={this.onChange}/>

                <TextField placeholder="Etudiants concernés" fullWidth margin="normal" name="studentName" value={this.state.Name} onChange={this.onChange}/>

                <TextField type="month" placeholder="Année Scolaire" fullWidth margin="normal" name="annee" value={this.state.annee} onChange={this.onChange}/>
                <TextField placeholder="Description" fullWidth margin="normal" name="description" value={this.state.description} onChange={this.onChange}/>

                        <Button variant="contained" color="primary" onClick={this.saveUser}>Save</Button>

                </form>
            </div>
        );
    }
}

const style ={
    display: 'flex',
    justifyContent: 'center'
}

export default EditUserComponent;