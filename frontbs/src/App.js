import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/header/header';
import Footer from './components/footer/footer';
import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import DashBoard from './components/dashboard/dashBoard';
import Tabela from './components/tabelas/TabelaEmprestimosIndex';
import Formulario from './components/formularios/FormularioIndex';
import FormularioEmprestimo from './components/formularios/FormularioEmprestimo';
import NTF from './components/notFound/pageNotFound';

export default class App extends Component {
  componentDidMount() {
    AOS.init({
      duration: 2000
    });
  }
  render(){
    return (
      <Router>
        <div className="App">
          <Header/>

          <Footer/>
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
          <Route path="/tabelaLivros">
            <Tabela />
          </Route>
          <Route path="/formulario">
            <Formulario />
          </Route>
          <Route path="/formularioEmprestimo">
            <FormularioEmprestimo />
          </Route>

          <Route component={NTF} />
        </Switch>
      </Router>
    );
  }
}

function Livros() {
  return <h1>Tabela de Livros</h1>;
}

function Andamento() {
  return <h1>Tabela de Emprestimos em Andamento</h1>;
}

function Cancelados() {
  return <h1>Tabela de Emprestimos Cancelados</h1>;
}

function Reservados() {
  return <h1>Tabela de Emprestimos Reservados</h1>;
}

function Realizados() {
  return <h1>Tabela de Emprestimos Realizados</h1>;
}