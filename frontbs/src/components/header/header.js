import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Menu, MenuItem, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import ICONE from "../../images/Group 1.png";
import EditoraIcon from "@material-ui/icons/Apartment";
import AutorIcon from "@material-ui/icons/Person";
import GeneroIcon from "@material-ui/icons/CardMembership";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
  },
  icon: {
    marginTop: 10,
  },
  header: {
    backgroundColor: "#2C60AD",
  },
  botao: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  itemDrop: {
    color: "black",
    fontSize: 11,
  },
}));

export default function Header() {
  const classes = useStyles();

  const [anchorEmpres, setAnchorEmpres] = React.useState(null);
  const [anchorNovo, setAnchorNovo] = React.useState(null);

  const handleClickEmpres = (event) => {
    setAnchorEmpres(event.currentTarget);
  };

  const handleClickNovo = (event) => {
    setAnchorNovo(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEmpres(null);
    setAnchorNovo(null);
  };

  return (
    <div>
      {/* ----------------- Header ----------------- */}

      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <Link to="/" className={classes.link}>
            <img src={ICONE} className={classes.icon} alt="logo" />
          </Link>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
          >
            <Link to="/gerenciaLivro" className={classes.link}>
              <Button className={classes.botao}>LIVROS</Button>
            </Link>
            <Button className={classes.botao} onClick={handleClickEmpres}>
              EMPRÉSTIMOS
            </Button>
            <Button className={classes.botao} onClick={handleClickNovo}>
              OUTROS
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>

      {/* ----------------- Menu Empréstimo ----------------- */}

      <Menu
        id="simple-menu"
        anchorEl={anchorEmpres}
        keepMounted
        open={Boolean(anchorEmpres)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={handleCloseMenu}>
          <Link className={classes.link} to="/reservados">
            <Typography className={classes.itemDrop}>Reservados</Typography>
          </Link>
        </MenuItem>
        <MenuItem onHover={handleCloseMenu}>
          <Link className={classes.link} to="/andamento">
            <Typography className={classes.itemDrop}>Em Andamento</Typography>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleCloseMenu}>
          <Link className={classes.link} to="/Realizados">
            <Typography className={classes.itemDrop}>Realizados</Typography>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleCloseMenu}>
          <Link className={classes.link} to="/cancelados">
            <Typography className={classes.itemDrop}>Cancelados</Typography>
          </Link>
        </MenuItem>
      </Menu>

      {/* ----------------- Menu Adicionar Novo ----------------- */}

      <Menu
        anchorEl={anchorNovo}
        keepMounted
        open={Boolean(anchorNovo)}
        onClose={handleCloseMenu}
      >
        <MenuItem onHover={handleCloseMenu}>
          <Link className={classes.link} to="/autores">
            <Typography className={classes.itemDrop}>
              <AutorIcon />
              Autor
            </Typography>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleCloseMenu}>
          <Link className={classes.link} to="/editoras">
            <Typography className={classes.itemDrop}>
              <EditoraIcon />
              Editora
            </Typography>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleCloseMenu}>
          <Link className={classes.link} to="/generos">
            <Typography className={classes.itemDrop}>
              <GeneroIcon />
              Gênero
            </Typography>
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
