import React from "react";
import { Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

export default function NTF() {
  const pathname = window.location.pathname;

  return (
    <div>
      <Grid container direction="column" justify="center" alignItems="center">
        <Typography variant="h3" style={{ marginTop: 20 }}>
          PÁGINA NÃO ENCONTRADA!
        </Typography>
        <Typography variant="h4" style={{ marginTop: 10, marginBottom: 10 }}>
          O endereço digitado não foi encontrado:
          <span style={{ color: "red" }}> "{pathname}"</span>
        </Typography>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            style={{ backgroundColor: "#2C60AD", color: "white" }}
          >
            Voltar a Dashboard
          </Button>
        </Link>
      </Grid>
    </div>
  );
}
