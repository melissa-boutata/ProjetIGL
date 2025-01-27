import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'; 

const style = {
    flexGrow: 1
}
/**
         * Classe NavBar
        
 */
const NavBar = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6" style={style}>
                         ESI Scolarité 
                    </Typography>
                    <Link className="sidenav-list__item" to="/" >
                        <Button color="inherit" >
                            <span>Acceuil</span>
                        </Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;
