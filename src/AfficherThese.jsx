import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';

class ListTheseComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            theses: [],
            message: null
        }
        this.deleteThese = this.deleteThese.bind(this);
        this.editThese = this.editThese.bind(this);
        this.addThese = this.addThese.bind(this);
        this.reloadTheseList = this.reloadTheseList.bind(this);
    }

    componentDidMount() {
        this.reloadTheseList();
    }

    reloadTheseList() {
        ApiService.fetchTheses()
            .then((res) => {
                this.setState({theses: res.data.result})
            });
    }

    deleteThese(theseId) {
        ApiService.deleteThese(theseId)
           .then(res => {
               this.setState({message : 'Th deleted successfully.'});
               this.setState({theses: this.state.theses.filter(these => these.id !== theseId)});
           })
    }

    editThese(id) {
        window.localStorage.setItem("theseId", id);
        this.props.history.push('/edit-these');
    }

    addThese() {
        window.localStorage.removeItem("TheseId");
        this.props.history.push('/add-these');
    }

    render() {
        return (
            <div>
                <Typography variant="h4" style={style}>Thèse Details</Typography>
                <Button variant="contained" color="primary" onClick={() => this.addUser()}>
                    Ajouter Thèse
                </Button>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Titre</TableCell>
                            <TableCell align="right">Profs encadrants</TableCell>
                            <TableCell align="right">Etudiants concernés</TableCell>
                            <TableCell align="right">Année scolaire</TableCell>
                            <TableCell align="right">Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.theses.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="right">{row.profsName}</TableCell>
                                <TableCell align="right">{row.studentName}</TableCell>
                                <TableCell align="right">{row.title}</TableCell>
                                <TableCell align="right">{row.month}</TableCell>
                                <TableCell align="right">{row.description}</TableCell>
                                <TableCell align="right" onClick={() => this.editThese(row.id)}><CreateIcon /></TableCell>
                                <TableCell align="right" onClick={() => this.eleteThese(row.id)}><DeleteIcon /></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </div>
        );
    }

}

const style ={
    display: 'flex',
    justifyContent: 'center'
}

export default ListTheseComponent;