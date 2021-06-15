import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {
  Button,
  Card,
  Fade,
  Grid,
  Modal,
  TextField,
  Typography,
  Backdrop,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  table: {
    Width: 1000,
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
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  cardDash: {
    width: 495,
    height: 180,
    backgroundColor: "#F3F3F3",
    borderColor: "#C1C1C1",
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
}));

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
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(tituloLivro, valor, dataInicial, dataFinal) {
  return { tituloLivro, valor, dataInicial, dataFinal };
}

const rows = [
  createData("Harry Potter", 150, "19/05/2021", "20/05/2021"),
  createData("Percy Jackson", 200, "19/05/2021", "20/05/2021"),
];

export default function DashBoard() {
  const classes = useStyles();

  const [openModalIni, setOpenModalIni] = React.useState(false);

  const handleOpen = () => {
    setOpenModalIni(true);
  };

  const handleClose = () => {
    setOpenModalIni(false);
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
          DASHBOARD
        </Typography>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <StyledTableCell align="right">
                <form className={classes.container} noValidate>
                  <TextField
                    color="white"
                    id="date"
                    label="Selecione uma data:"
                    type="date"
                    defaultValue={MyDateString}
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
                <StyledTableCell align="right">
                  {row.dataInicial}
                </StyledTableCell>
                <StyledTableCell align="right">{row.dataFinal}</StyledTableCell>
                <StyledTableCell align="center">
                  <Button variant="outlined" onClick={handleOpen}>
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
            <Typography
              component="h1"
              variant="h4"
              className={classes.tituloCard}
            >
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
            <Typography
              component="h1"
              variant="h4"
              className={classes.tituloCard}
            >
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
              <Button className={classes.botaoIniciar} onClick={handleClose}>
                Confirmar
              </Button>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
