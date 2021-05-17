import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    position: "absolute",
    bottom: 0,
    display: "flex",
    width: "100%",
    height: 80,
    backgroundColor: "#EFEFEF",
    alignItems: "center",
  },
  typo: {
    fontSize: 11,
    fontWeight: 200,
    paddingLeft: 50,
  }
}))

export default function Footer() {
  const classes = useStyles();

  return(
    <div className={classes.footer}>
      <Typography variant="h4" className={classes.typo}>
        ©2021 SISTEMA DE EMPRÉSTIMO DE LIVROS. TODOS OS DIREITOS RESERVADOS.
      </Typography>
    </div>
  )
}