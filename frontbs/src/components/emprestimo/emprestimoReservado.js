import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import {
  Backdrop,
  Button,
  Fade,
  Grid,
  InputAdornment,
  Modal,
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
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
import api from "../requisicoes/axios";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#FFF857",
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
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  botaoIniciar: {
    backgroundColor: "#2C60AD",
    color: "#FFFFFF",
    marginLeft: 10,
    "&:hover": {
      backgroundColor: "#25477A",
    },
  },
  botaoCancelar: {
    borderColor: "#2C60AD",
    color: "#2C60AD",
  },
  gridBotoesModal: {
    marginTop: 10,
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
  const [reload, setReload] = useState(true);
  const [idEmprestimoSubmit, setIdEmprestimoSubmit] = useState(0);

  const [openModalIni, setOpenModalIni] = useState(false);
  const [reservados, setReservados] = useState([]);

  const handleOpen = (id) => {
    setOpenModalIni(true);
    setIdEmprestimoSubmit(id);
    console.log(idEmprestimoSubmit);
  };

  const handleClose = () => {
    console.log(idEmprestimoSubmit);
    setOpenModalIni(false);
  };

  const handleCloseSubmit = () => {
    api.put("/iniciar/", idEmprestimoSubmit);
    setOpenModalIni(false);
    setReload(!reload);
  };

  const dataAtual = new Date();
  var MyDateString = 0;

  MyDateString =
    dataAtual.getFullYear() +
    "-" +
    ("0" + (dataAtual.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + dataAtual.getDate()).slice(-2);

  useEffect(() => {
    api.get("/emprestimos").then((res) => {
      setReservados(res.data);
      console.log(res.data);
    });
  }, [reload]);

  return (
    <div>
      <TableContainer className={classes.tableContainer}>
        <Typography component="h1" variant="h3" className={classes.titulo}>
          EMPRÉSTIMOS RESERVADOS
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
              <StyledTableCell align="center">Status</StyledTableCell>
              <StyledTableCell align="center">
                <Link
                  to="/formularioEmprestimo"
                  style={{ textDecoration: "none" }}
                >
                  <Button>
                    <AddIcon />
                  </Button>
                </Link>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reservados.map((row) => (
              <StyledTableRow key={row.idEmprestimo}>
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
                <StyledTableCell align="center">{row.status}</StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    variant="outlined"
                    onClick={() =>
                      handleOpen(
                        row.idEmprestimo,
                        row.dataInicial,
                        row.dataFinal,
                        row.dataEntregue,
                        row.valorTotal,
                        row.status,
                        row.cliente,
                        row.exemplar
                      )
                    }
                  >
                    Iniciar
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal
        className={classes.modal}
        open={openModalIni}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModalIni}>
          <div className={classes.paper}>
            <Typography style={{ fontSize: 16 }}>
              Quer realmente iniciar este empréstimo?
            </Typography>
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
              className={classes.gridBotoesModal}
            >
              <Button
                variant="outlined"
                className={classes.botaoCancelar}
                onClick={handleClose}
              >
                Cancelar
              </Button>
              <Button
                className={classes.botaoIniciar}
                onClick={handleCloseSubmit}
              >
                Confirmar
              </Button>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
