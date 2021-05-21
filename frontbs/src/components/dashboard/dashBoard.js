import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button, Card, Grid, TextField, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  table: {
    Width: 1000
  },
  tableContainer: {
    marginLeft: "auto",
    marginRight: "auto",
    width: 1100,
    marginTop: 25,
  },
  titulo: {
    color: "#143362",
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  cardDash: {
    width: 495,
    height: 180,
    backgroundColor: "#F3F3F3",
    borderColor: "#C1C1C1"
  },
  grid: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  tituloCard: {
    color: "#2D2D2D",
    marginLeft: 5,
    marginTop: 5,
  },
  gridItem: {
    marginTop: 10,
  },
  conteudoCard: {
    marginLeft: 5,
    fontSize: 14,
    marginTop: 8,
  }
}))

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#143362",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(tituloLivro, valor, dataInicial, dataFinal) {
  return { tituloLivro, valor, dataInicial, dataFinal };
}

const rows = [
  createData('Harry Potter', 150, '19/05/2021', '20/05/2021'),
  createData('Percy Jackson', 200, '19/05/2021', '20/05/2021')
];



export default function DashBoard() {
const classes = useStyles();

const dataAtual = new Date();
const dia = dataAtual.getDate();
const mes = dataAtual.getMonth() + 1;
const ano = dataAtual.getFullYear();

const dataCalendario = ano + "-" + mes + "-" + dia;

return(
<div>
  <TableContainer className={classes.tableContainer} >
    <Typography  component="h1" variant="h2" className={classes.titulo}>
      DASHBOARD
    </Typography>
        <Table className={classes.table} component={Paper} variant="outlined">
          <TableHead>
            <TableRow>
              <StyledTableCell align="right">
                <form className={classes.container} noValidate>
                  <TextField
                    id="date"
                    label="Selecione uma data:"
                    type="date"
                    defaultValue={dataCalendario}
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </form>
              </StyledTableCell>
              <StyledTableCell align="right">Valor</StyledTableCell>
              <StyledTableCell align="right">Data Inicial</StyledTableCell>
              <StyledTableCell align="right">Data Final</StyledTableCell>
              <StyledTableCell align="center">Ação</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.tituloLivro}>
                <StyledTableCell component="th" scope="row">
                  {row.tituloLivro}
                </StyledTableCell>
                <StyledTableCell align="right">{row.valor}</StyledTableCell>
                <StyledTableCell align="right">{row.dataInicial}</StyledTableCell>
                <StyledTableCell align="right">{row.dataFinal}</StyledTableCell>
                <StyledTableCell align="center">
                  <Button variant="outlined">
                    Iniciar
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
  </TableContainer>
  <Grid container spacing={1} justify="center" className={classes.grid}>
    <Grid item className={classes.gridItem}>
      <Card className={classes.cardDash} variant="outlined">
        <Typography component="h1" variant="h4" className={classes.tituloCard}>
          Estatísticas
        </Typography>
        <Typography className={classes.conteudoCard}>
          842 livros cadastrados
        </Typography>
        <Typography className={classes.conteudoCard}>
          159 empréstimos realizados
        </Typography>
        <Typography className={classes.conteudoCard}>
          10 empréstimos em andamento
        </Typography>
        <Typography className={classes.conteudoCard}>
          5 empréstimos reservados
        </Typography>
      </Card>
    </Grid>
    <Grid item className={classes.gridItem}>
      <Card className={classes.cardDash} variant="outlined">
        <Typography component="h1" variant="h4" className={classes.tituloCard}>
          Estatísticas
        </Typography>
        <Typography className={classes.conteudoCard}>
          842 livros cadastrados
        </Typography>
        <Typography className={classes.conteudoCard}>
          159 empréstimos realizados
        </Typography>
        <Typography className={classes.conteudoCard}>
          10 empréstimos em andamento
        </Typography>
        <Typography className={classes.conteudoCard}>
          5 empréstimos reservados
        </Typography>
      </Card>
    </Grid>
  </Grid>

</div>
)
}