import React, { Component } from 'react'
import ApiService from "./service/ApiService";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import NavBar from './NavBar.jsx';
import SideBar from './SideBar.jsx';
import Container from '@material-ui/core/Container'; 
import axios from 'axios';

/**
 *  Classe ListTheseComponent qui affiche la liste des thèses existantes dans le système 
 */

class ListTheseComponent extends Component {
    /**
 * @constructor
 */

    constructor(props) {
        super(props)
        this.state = {
           /* theses: [{ id: 1,title:"Detection de fraude", profsName: 'Wasif', studentName: 'boutata', month: 'Mai 2019', description: 'wasif@email.com' },{ id: 1,title:"Detection de fraude", profsName: 'Wasif', studentName: 'boutata', month: 'Mai 2019', description: 'wasif@email.com' },{ id: 1,title:"Detection de fraude", profsName: 'Wasif', studentName: 'boutata', month: 'Mai 2019', description: 'wasif@email.com' },{ id: 1,title:"Detection de fraude", profsName: 'Wasif', studentName: 'boutata', month: 'Mai 2019', description: 'wasif@email.com' },{ id: 1,title:"Detection de fraude", profsName: 'Wasif', studentName: 'boutata', month: 'Mai 2019', description: 'wasif@email.com' },
            { id: 1,title:"Detection de fraude", profsName: 'Wasif', studentName: 'boutata', month: 'Mai 2019', description: 'wasif@email.com' },
            { id: 1,title:"Detection de fraud],*/
            theses: [{
            id:'',
            title:'',
            profsName:'',
            studentName:'',
            annee:'',
            description:''
          }],
            message: null
        }
        this.deleteThese = this.deleteThese.bind(this);
        this.editThese = this.editThese.bind(this);
        this.addThese = this.addThese.bind(this);
    }
    
        /**
         * @async
         * @method
         * @returns Liste thèses 
         * @throws {NotFoundError} La liste des thèses n'est pas trouvée 
         */
      async componentDidMount(){
        axios.get('/api/list')
          .then(list => {
            this.setState({theses: list.data})
          })
          .catch(err => console.log(err))
       }

        /**

        * @method qui supprime une thèse ayant l'identifiant theseId
        * @param {number} theseId - Identifiant de la thèse 
        */
    /*deleteThese(theseId) {
        axios.delete(USER_API_BASE_URL + '/' + theseId )  
           .then(res => {
                this.setState({theses: this.state.theses.filter(these => these.id !== theseId)});
                this.setState({message : 'These deleted successfully.'});
               
           })
    }*/ 

    render() {
        return (

            <div>
            <SideBar/>
            <div className="auth-wrapper">
            <div className="auth-liste">
            <Typography component="h4" variant="h4" align="center" color="textPrimary" gutterBottom>
                Liste des thèses de Doctorat
            </Typography>

            <Container>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Titre</TableCell>
                            <TableCell align="center">Etudiants concernés</TableCell>
                            <TableCell align="center">Profs encadrants</TableCell>
                            <TableCell align="center">Année scolaire</TableCell>
                            <TableCell align="center">Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.theses.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row"> {row.id} </TableCell>
                                <TableCell align="center">{row.title}</TableCell>
                                <TableCell align="center">{row.studentName}</TableCell>
                                <TableCell align="center">{row.profsName}</TableCell>
                                <TableCell align="center">{row.annee}</TableCell>
                                <TableCell align="center">{row.description}</TableCell>
                                <TableCell align="center" onClick={() => this.editThese(row.id)}><CreateIcon /></TableCell>
                                <TableCell align="center" onClick={() => this.deleteThese(row.id)}><DeleteIcon /></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Container>
                </div>
                </div>

            </div>
        );
    }

}

const style ={
    display: 'flex',
    justifyContent: 'center'
}

export default ListTheseComponent;
