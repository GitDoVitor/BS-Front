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
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import api from "../requisicoes/axios";

const useStyles = makeStyles((theme) => ({
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
  tituloModal: {
    fontSize: "26px",
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
    border: "0px solid #000",
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
  form: {
    margin: "center",
    width: "100%",
    display: "flex",
    flexFlow: "row wrap",
  },
  input: {
    backgroundColor: "#F3F3F3",
    border: "1px solid #C1C1C1",
    padding: "8px",
    marginRight: "7px",
    marginBottom: "8px",
    marginTop: "10px",
    width: "100%",
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

export default function Editoras() {
  const classes = useStyles();
  const [reload, setReload] = React.useState(true);
  const [editoras, setEditoras] = React.useState([]);
  const [idEditora, setIdEditora] = React.useState(0);
  const [openModalIni, setOpenModalIni] = React.useState(false);
  const [openModalIniAdd, setOpenModalIniAdd] = React.useState(false);

  const [data, setData] = React.useState({
    nome: "",
  });

  function submit(e) {
    api.post("editoras", {
      nome: data.nome,
    });
    setOpenModalIniAdd(false);
    setReload(!reload);
  }

  function handleForm(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    console.log(newData);
    setData(newData);
  }

  const handleOpen = (id) => {
    setIdEditora(id);
    setOpenModalIni(true);
  };

  const handleClose = () => {
    setOpenModalIni(false);
  };

  const handleCloseDEL = () => {
    api.delete(`editoras/${idEditora}`);
    setReload(!reload);
    setOpenModalIni(false);
  };

  const handleOpenAdd = () => {
    setOpenModalIniAdd(true);
  };

  const handleCloseAdd = () => {
    setOpenModalIniAdd(false);
  };

  React.useEffect(() => {
    api.get("/editoras").then((res) => {
      setEditoras(res.data);
      console.log(res.data);
    });
  }, [reload]);

  return (
    <div>
      <TableContainer className={classes.tableContainer}>
        <Typography component="h1" variant="h3" className={classes.titulo}>
          EDITORAS
        </Typography>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Nome da Editora</StyledTableCell>
              <StyledTableCell align="right">
                <Button style={{ color: "white" }} onClick={handleOpenAdd}>
                  <AddIcon />
                </Button>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {editoras.map((row) => (
              <StyledTableRow key={row.idEditora}>
                <StyledTableCell component="th" scope="row">
                  {row.nome}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Button onClick={() => handleOpen(row.idEditora)}>
                    <CloseIcon />
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
              Quer realmente excluir essa editora?
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
              <Button className={classes.botaoIniciar} onClick={handleCloseDEL}>
                Confirmar
              </Button>
            </Grid>
          </div>
        </Fade>
      </Modal>

      <Modal
        className={classes.modal}
        open={openModalIniAdd}
        onClose={handleCloseAdd}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModalIniAdd}>
          <div className={classes.paper}>
            <Typography
              component="h1"
              variant="h3"
              className={classes.tituloModal}
            >
              Adicionar nova editora
            </Typography>

            <form className={classes.form} onSubmit={(e) => submit(e)}>
              <input
                className={classes.input}
                type="text"
                id="nome"
                value={data.nome}
                placeholder="Nome"
                onChange={(e) => handleForm(e)}
              />
            </form>

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
                onClick={handleCloseAdd}
              >
                Cancelar
              </Button>
              <Button className={classes.botaoIniciar} onClick={submit}>
                Confirmar
              </Button>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
