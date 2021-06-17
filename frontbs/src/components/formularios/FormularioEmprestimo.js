import React from "react";
import { Backdrop, Fade, Modal, makeStyles } from "@material-ui/core";
import "./FormularioEmprestimoStyle.scss";
import { DataGrid } from "@material-ui/data-grid";

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

const columns = [
  {
    field: "titulo",
    headerName: "Título",
    width: 150,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "quantidade",
    headerName: "Quantidade",
    width: 150,
    type: "number",
    headerClassName: "super-app-theme--header",
  },
];

const rows = [
  { id: 1, titulo: "Livro1", quantidade: 35 },
  { id: 2, titulo: "Livro2", quantidade: 42 },
];

export default function Generos() {
  const classes = useStyles();

  const [openModalIni, setOpenModalIni] = React.useState(false);

  const handleOpen = () => {
    setOpenModalIni(true);
  };

  const handleClose = () => {
    setOpenModalIni(false);
  };

  return (
    <div id="container-formulario-emprestimo">
      <form>
        <h1 className="titulo">Novo Empréstimo</h1>
        <input
          className="tres-por-linha"
          type="text"
          name="name"
          placeholder="Livro"
        />
        <input
          className="tres-por-linha input-data"
          type="date"
          name="name"
          placeholder="Data Inicial"
          onFocus={(e) => (e.currentTarget.type = "date")}
          onBlur={(e) => (e.currentTarget.type = "text")}
        />
        <input
          className="tres-por-linha input-data"
          type="date"
          name="name"
          placeholder="Data Final"
          onFocus={(e) => (e.currentTarget.type = "date")}
          onBlur={(e) => (e.currentTarget.type = "text")}
        />

        <button
          className="botao-pesquisar-livro"
          type="button"
          onClick={handleOpen}
        >
          PESQUISAR LIVRO
        </button>

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
            <div className="modal-verificar">
              <h2>Verificar disponibilidade</h2>
              <form>
                <input
                  className="um-por-linha"
                  type="text"
                  name="name"
                  placeholder="Livro"
                />
                <input
                  className="dois-por-linha-modal date-esquerda  input-data"
                  type="date"
                  name="name"
                  placeholder="Data Inicial"
                  onFocus={(e) => (e.currentTarget.type = "date")}
                  onBlur={(e) => (e.currentTarget.type = "text")}
                />
                <input
                  className="dois-por-linha-modal input-data"
                  type="date"
                  name="name"
                  placeholder="Data Final"
                  onFocus={(e) => (e.currentTarget.type = "date")}
                  onBlur={(e) => (e.currentTarget.type = "text")}
                />
              </form>
              <div id="container-tabela-modal">
                <DataGrid
                  rows={rows}
                  columns={columns}
                  pageSize={5}
                  checkboxSelection
                  className={classes.root}
                />
              </div>
              <input
                className="botao-confirmar-modal"
                type="submit"
                value="CONFIRMAR"
              />
            </div>
          </Fade>
        </Modal>

        <input
          className="dois-por-linha"
          type="text"
          name="name"
          placeholder="Nome do cliente"
        />
        <input
          className="dois-por-linha"
          type="text"
          name="name"
          placeholder="Telefone"
        />

        <input className="botao-confirmar" type="submit" value="CONFIRMAR" />
      </form>
    </div>
  );
}
