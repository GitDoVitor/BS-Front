import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import {
  Grid,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  withStyles,
} from "@material-ui/core";
import api from "../requisicoes/axios";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#2F972D",
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
  tableContainer: {
    marginLeft: "auto",
    marginRight: "auto",
    width: 1000,
    marginTop: 25,
  },
  titulo: {
    color: "#143362",
    fontFamily: "Tauri, sans-serif",
  },
  barraPesquisa: {
    width: 680,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
  },
  barraDataInicial: {
    marginRight: 10,
    width: 150,
  },
  barraDataFinal: {
    width: 150,
  },
}));

export default function Emprestimos() {
  const classes = useStyles();
  const [realizados, setRealizados] = React.useState([]);
  const [reload, setReload] = React.useState(true);

  const dataAtual = new Date();
  var MyDateString = 0;

  MyDateString =
    dataAtual.getFullYear() +
    "-" +
    ("0" + (dataAtual.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + dataAtual.getDate()).slice(-2);

  React.useEffect(() => {
    api.get("/emprestimos/realizados").then((res) => {
      setRealizados(res.data);
      console.log(res.data);
    });
  }, [reload]);

  return (
    <div>
      <TableContainer className={classes.tableContainer}>
        <Typography component="h1" variant="h3" className={classes.titulo}>
          EMPRÉSTIMOS REALIZADOS
        </Typography>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <TextField
            className={classes.barraPesquisa}
            label="Pesquisar"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <form className={classes.container} noValidate>
            <TextField
              id="date"
              label="Selecione uma data inicial:"
              type="date"
              defaultValue={MyDateString}
              className={classes.barraDataInicial}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
          <form className={classes.container} noValidate>
            <TextField
              id="date"
              label="Selecione uma data final:"
              type="date"
              defaultValue={MyDateString}
              className={classes.barraDataFinal}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
        </Grid>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Nome do Cliente</StyledTableCell>
              <StyledTableCell align="right">Título do Livro</StyledTableCell>
              <StyledTableCell align="right">Valor</StyledTableCell>
              <StyledTableCell align="right">Data Inicial</StyledTableCell>
              <StyledTableCell align="right">Data Final</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {realizados.map((row) => (
              <StyledTableRow key={row.cliente}>
                <StyledTableCell component="th" scope="row">
                  {row.nomeCliente}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.exemplar.livro.titulo}
                </StyledTableCell>
                <StyledTableCell align="right">
                  R${row.valorTotal},00
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.dataInicial}
                </StyledTableCell>
                <StyledTableCell align="right">{row.dataFinal}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
