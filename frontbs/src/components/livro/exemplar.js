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
import api from "../requisicoes/axios";

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

export default function Exemplares() {
  const classes = useStyles();

  const [openModalIni, setOpenModalIni] = React.useState(false);
  const [exemplares, setExemplares] = React.useState([]);
  const [reload, setReload] = React.useState(true);
  const [idExemplar, setIdExemplar] = React.useState(0);

  const handleOpen = (id) => {
    setIdExemplar(id);
    setOpenModalIni(true);
  };

  const handleClose = () => {
    setOpenModalIni(false);
  };

  const handleCloseSubmit = () => {
    api.delete(`exemplares/${idExemplar}`);
    setOpenModalIni(false);
    setReload(!reload);
  };

  React.useEffect(() => {
    api.get("/exemplares").then((res) => {
      setExemplares(res.data);
      console.log(res.data);
    });
  }, [reload]);

  return (
    <div>
      <TableContainer className={classes.tableContainer}>
        <Typography component="h1" variant="h3" className={classes.titulo}>
          EXEMPLARES
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
              <StyledTableCell align="left">Exemplar</StyledTableCell>
              <StyledTableCell align="right">ISBN</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
              <StyledTableCell align="center">
                <Link style={{ color: "white" }} to="/formulario">
                  <AddIcon />
                </Link>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {exemplares.map((row) => (
              <StyledTableRow key={row.autor}>
                <StyledTableCell component="th" scope="row" align="left">
                  {row.livro.titulo}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row" align="right">
                  {row.isbn}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row" align="right">
                  {row.status}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Button onClick={() => handleOpen(row.idExemplar)}>
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
              <Button
                className={classes.botaoIniciar}
                onClick={handleCloseSubmit}
              >
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
