import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { Button, ButtonGroup } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ICONE from '../../images/Group 1.png'

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
  },
  icon: {
    marginTop: 10,
  },
  header: {
    backgroundColor: "#2C60AD",
  },
  botao: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  buttonGroup: {
    marginLeft: "auto",
    marginRight: 150
  },
}))

export default function Header() {
  const classes = useStyles();

  return(
    <div>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <Link to="/" className={classes.link}>
            <img src={ICONE} className={classes.icon} alt="logo"/>
          </Link>
          <ButtonGroup className={classes.buttonGroup}>
            <Link to="/gerenciaLivro" className={classes.link}>
              <Button className={classes.botao}>GERENCIAR LIVROS</Button>
            </Link>
            <Link to="/gerenciaEmprestimo" className={classes.link}>
              <Button className={classes.botao}>GERENCIAR EMPRÉSTIMOS</Button>
            </Link>
            <Link className={classes.link}>
              <Button className={classes.botao}>ADICIONAR LIVRO</Button>
            </Link>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </div>
  )
}