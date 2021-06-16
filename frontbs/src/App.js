import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import DashBoard from "./components/dashboard/dashBoard";
import Tabela from "./components/tabelas/TabelaEmprestimosIndex";
import Formulario from "./components/formularios/FormularioIndex";
import FormularioEmprestimo from "./components/formularios/FormularioEmprestimo";
import Reservados from "./components/emprestimo/emprestimoReservado";
import Andamento from "./components/emprestimo/emprestimoAndamento";
import Realizados from "./components/emprestimo/emprestimoRealizado";
import Cancelados from "./components/emprestimo/emprestimoCancelado";
import NTF from "./components/notFound/pageNotFound";
import Autores from "./components/autor/autor";
import Editoras from "./components/editora/editora";
import Generos from "./components/genero/genero";
import Livros from "./components/livro/livro";

export default class App extends Component {
  componentDidMount() {
    AOS.init({
      duration: 2000,
    });
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header />

          <Footer />
        </div>

        <Switch>
          <Route path="/gerenciaLivro">
            <Livros />
          </Route>
          <Route exact path="/">
            <DashBoard />
          </Route>
          <Route path="/reservados">
            <Reservados />
          </Route>
          <Route path="/andamento">
            <Andamento />
          </Route>
          <Route path="/cancelados">
            <Cancelados />
          </Route>
          <Route path="/realizados">
            <Realizados />
          </Route>
          <Route path="/formulario">
            <Formulario />
          </Route>
          <Route path="/formularioEmprestimo">
            <FormularioEmprestimo />
          </Route>
          <Route path="/editoras">
            <Editoras />
          </Route>
          <Route path="/autores">
            <Autores />
          </Route>
          <Route path="/generos">
            <Generos />
          </Route>
          <Route component={NTF} />
        </Switch>
      </Router>
    );
  }
}
