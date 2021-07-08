import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import {
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
    backgroundColor: "#FF3535",
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
  tituloTabela: {
    color: "#FFFFFF",
  },
  barraPesquisa: {
    width: 1000,
    marginTop: 10,
    marginBottom: 10,
  },
}));

export default function Emprestimos() {
  const classes = useStyles();
  const [reload, setReload] = React.useState(true);

  const [cancelados, setCancelados] = React.useState([]);

  React.useEffect(() => {
    api.get("/emprestimos/cancelados").then((res) => {
      setCancelados(res.data);
      console.log(res.data);
    });
  }, [reload]);

  return (
    <div>
      <TableContainer className={classes.tableContainer}>
        <Typography component="h1" variant="h3" className={classes.titulo}>
          EMPRÉSTIMOS CANCELADOS
        </Typography>
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
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left" className={classes.tituloTabela}>
                Nome do Cliente
              </StyledTableCell>
              <StyledTableCell align="right" className={classes.tituloTabela}>
                Título do Livro
              </StyledTableCell>
              <StyledTableCell align="right" className={classes.tituloTabela}>
                Valor
              </StyledTableCell>
              <StyledTableCell align="right" className={classes.tituloTabela}>
                Data Inicial
              </StyledTableCell>
              <StyledTableCell align="right" className={classes.tituloTabela}>
                Data Final
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cancelados.map((row) => (
              <StyledTableRow key={row.idCliente}>
                <StyledTableCell component="th" scope="row">
                  {row.nomeCliente}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.exemplar.livro.titulo}
                </StyledTableCell>
                <StyledTableCell align="right">
                  R${row.valor},00
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
