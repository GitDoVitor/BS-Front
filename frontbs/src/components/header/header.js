import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ICONE from '../../images/Group 1.png'

const useStyles = makeStyles((theme) => ({
  icon: {
    marginTop: 10,
  },
  header: {
    backgroundColor: "#2C60AD",
  },
  botao: {
    color: "#FFFFFF",
    fontSize: 18,
    marginLeft: 50,
  },
}))

export default function Header() {
  const classes = useStyles();

  return(
    <div>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <Link to="/">
            <img src={ICONE} className={classes.icon} alt="logo"/>
          </Link>
          
            <Button className={classes.botao} style={{ marginLeft: 200 }}>DASHBOARD</Button>
            <Button className={classes.botao}>GERENCIAR LIVROS</Button>
            <Button className={classes.botao}>GERENCIAR EMPRÉSTIMOS</Button>
            <Button className={classes.botao}>ADICIONAR LIVRO</Button>
          
        </Toolbar>
      </AppBar>
    </div>
  )

}