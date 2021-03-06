import React from "react";
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
import api from "../requisicoes/axios";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#7BC0FF",
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
  const [reload, setReload] = React.useState(true);
  const [openModalFinaliza, setOpenModalFinaliza] = React.useState(false);
  const [openModalCancela, setOpenModalCancela] = React.useState(false);
  const [openModalRenova, setOpenModalRenova] = React.useState(false);
  const [andamentos, setAndamentos] = React.useState([]);
  const [idEmprestimoFinaliza, setIdEmprestimoFinaliza] = React.useState(0);
  const [idEmprestimoCancela, setIdEmprestimoCancela] = React.useState(0);
  const [idEmprestimoRenova, setIdEmprestimoRenova] = React.useState(0);

  React.useEffect(() => {
    api.get("/emprestimos/andamento").then((res) => {
      setAndamentos(res.data);
      console.log(res.data);
    });
  }, [reload]);

  const handleOpenFinaliza = (id) => {
    setIdEmprestimoFinaliza(id);
    setOpenModalFinaliza(true);
  };

  const handleCloseFinaliza = () => {
    setOpenModalFinaliza(false);
  };

  const handleCloseFinalizaSubmit = () => {
    api.put(`emprestimos/finaliza/${idEmprestimoFinaliza}`);
    alert("Empr??stimo Finalizado");
    setOpenModalFinaliza(false);
    setReload(!reload);
  };

  const handleOpenCancela = (id) => {
    setIdEmprestimoCancela(id);
    setOpenModalCancela(true);
  };

  const handleCloseCancela = () => {
    setOpenModalCancela(false);
  };

  const handleCloseCancelaSubmit = () => {
    api.put(`emprestimos/cancelar/${idEmprestimoCancela}`);
    alert("Empr??stimo Cancelado");
    setOpenModalCancela(false);
  };

  const handleOpenRenova = () => {
    setOpenModalRenova(true);
  };

  const handleCloseRenova = () => {
    setOpenModalRenova(false);
  };

  const dataAtual = new Date();
  var MyDateString = 0;

  MyDateString =
    dataAtual.getFullYear() +
    "-" +
    ("0" + (dataAtual.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + dataAtual.getDate()).slice(-2);

  return (
    <div>
      <TableContainer className={classes.tableContainer}>
        <Typography component="h1" variant="h3" className={classes.titulo}>
          EMPR??STIMOS EM ANDAMENTO
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
              <StyledTableCell align="right">T??tulo do Livro</StyledTableCell>
              <StyledTableCell align="right">Valor</StyledTableCell>
              <StyledTableCell align="right">Data Inicial</StyledTableCell>
              <StyledTableCell align="right">Data Final</StyledTableCell>
              <StyledTableCell align="center">A????o</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {andamentos.map((row) => (
              <StyledTableRow key={row.idCliente}>
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
                <StyledTableCell align="center">
                  <Grid
                    container
                    direction="row"
                    justify="space-around"
                    alignItems="center"
                  >
                    <Button
                      variant="outlined"
                      onClick={() => handleOpenFinaliza(row.idEmprestimo)}
                    >
                      Finalizar
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() => handleOpenCancela(row.idEmprestimo)}
                    >
                      Cancelar
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() => handleOpenRenova(row.idEmprestimo)}
                    >
                      Renovar
                    </Button>
                  </Grid>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal
        className={classes.modal}
        open={openModalFinaliza}
        onClose={handleCloseFinaliza}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModalFinaliza}>
          <div className={classes.paper}>
            <Typography style={{ fontSize: 16 }}>
              Quer realmente finalizar este empr??stimo?
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
                onClick={handleCloseFinaliza}
              >
                Cancelar
              </Button>
              <Button
                className={classes.botaoIniciar}
                onClick={handleCloseFinalizaSubmit}
              >
                Confirmar
              </Button>
            </Grid>
          </div>
        </Fade>
      </Modal>

      <Modal
        className={classes.modal}
        open={openModalCancela}
        onClose={handleCloseCancela}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModalCancela}>
          <div className={classes.paper}>
            <Typography style={{ fontSize: 16 }}>
              Quer realmente cancelar este empr??stimo?
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
                onClick={handleCloseCancela}
              >
                Cancelar
              </Button>
              <Button
                className={classes.botaoIniciar}
                onClick={handleCloseCancelaSubmit}
              >
                Confirmar
              </Button>
            </Grid>
          </div>
        </Fade>
      </Modal>

      <Modal
        className={classes.modal}
        open={openModalRenova}
        onClose={handleCloseRenova}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModalRenova}>
          <div className={classes.paper}>
            <Typography style={{ fontSize: 16 }}>
              Quer realmente renovar este empr??stimo?
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
                onClick={handleCloseRenova}
              >
                Cancelar
              </Button>
              <Button
                className={classes.botaoIniciar}
                onClick={handleCloseRenova}
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
