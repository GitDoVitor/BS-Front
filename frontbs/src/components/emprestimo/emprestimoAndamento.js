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

function createData(cliente, titulo, valor, dataInicial, dataFinal) {
  return { cliente, titulo, valor, dataInicial, dataFinal };
}

const rows = [
  createData("Yasmin Guedes", "Percy Jackson", 50, "09/06/2021", "12/06/2021"),
];

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

  const [openModalFinaliza, setOpenModalFinaliza] = React.useState(false);
  const [openModalCancela, setOpenModalCancela] = React.useState(false);
  const [openModalRenova, setOpenModalRenova] = React.useState(false);

  const handleOpenFinaliza = () => {
    setOpenModalFinaliza(true);
  };

  const handleCloseFinaliza = () => {
    setOpenModalFinaliza(false);
  };

  const handleOpenCancela = () => {
    setOpenModalCancela(true);
  };

  const handleCloseCancela = () => {
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
          EMPRÉSTIMOS EM ANDAMENTO
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
              <StyledTableCell align="center">Ação</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.cliente}>
                <StyledTableCell component="th" scope="row">
                  {row.cliente}
                </StyledTableCell>
                <StyledTableCell align="right">{row.titulo}</StyledTableCell>
                <StyledTableCell align="right">
                  R${row.valor},00
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
                    <Button variant="outlined" onClick={handleOpenFinaliza}>
                      Finalizar
                    </Button>
                    <Button variant="outlined" onClick={handleOpenCancela}>
                      Cancelar
                    </Button>
                    <Button variant="outlined" onClick={handleOpenRenova}>
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
              Quer realmente finalizar este empréstimo?
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
                onClick={handleCloseFinaliza}
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
              Quer realmente cancelar este empréstimo?
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
                onClick={handleCloseCancela}
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
              Quer realmente renovar este empréstimo?
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
