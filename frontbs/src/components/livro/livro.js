import React from "react";
import {
  Backdrop,
  Button,
  Fade,
  Grid,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  withStyles,
  makeStyles,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    marginLeft: "auto",
    marginRight: "auto",
    width: 1300,
    marginTop: 25,
  },
  titulo: {
    color: "#143362",
    fontFamily: "Tauri, sans-serif",
  },
  barraPesquisa: {
    width: 1300,
    marginTop: 10,
    marginBottom: 10,
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

function createData(
  titulo,
  editora,
  genero,
  autor,
  preco,
  edicao,
  idioma,
  dataPub,
  ISBN
) {
  return {
    titulo,
    editora,
    genero,
    autor,
    preco,
    edicao,
    idioma,
    dataPub,
    ISBN,
  };
}

const rows = [
  createData(
    "Magnus Chase e os Deuses de Asgard - O Navio dos Mortos",
    "Intríseca",
    "Aventura",
    "Rick Riordan",
    20,
    1,
    "PT-BR",
    "03/10/2017",
    9788551002476
  ),
];

export default function Livros() {
  const classes = useStyles();

  const [openModalIni, setOpenModalIni] = React.useState(false);

  const handleOpen = () => {
    setOpenModalIni(true);
  };

  const handleClose = () => {
    setOpenModalIni(false);
  };

  return (
    <div>
      <TableContainer className={classes.tableContainer}>
        <Typography component="h1" variant="h3" className={classes.titulo}>
          LIVROS
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
              <StyledTableCell align="left">Livro</StyledTableCell>
              <StyledTableCell align="right">Editora</StyledTableCell>
              <StyledTableCell align="right">Gênero</StyledTableCell>
              <StyledTableCell align="right">Autor</StyledTableCell>
              <StyledTableCell align="right">Preço</StyledTableCell>
              <StyledTableCell align="right">Edição</StyledTableCell>
              <StyledTableCell align="right">Idioma</StyledTableCell>
              <StyledTableCell align="right">
                Data de Publicação
              </StyledTableCell>
              <StyledTableCell align="right">ISBN</StyledTableCell>
              <StyledTableCell align="center">
                <Link style={{ color: "white" }} to="/formulario">
                  <AddIcon />
                </Link>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.autor}>
                <StyledTableCell component="th" scope="row">
                  {row.titulo}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.editora}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.genero}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.autor}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  R${row.preco},00
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.edicao}ª
                </StyledTableCell>{" "}
                <StyledTableCell component="th" scope="row">
                  {row.idioma}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.dataPub}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.ISBN}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Button onClick={handleOpen}>
                    <MoreHorizIcon />
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
              O que quer fazer com esse livro?
            </Typography>
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
              className={classes.gridBotoesModal}
            >
              <Button
                className={classes.botaoCancelar}
                variant="outlined"
                onClick={handleClose}
              >
                Cancelar
              </Button>
              <Button className={classes.botaoIniciar} onClick={handleClose}>
                Excluir
              </Button>
              <Button onClick={handleClose} className={classes.botaoIniciar}>
                Editar
              </Button>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
