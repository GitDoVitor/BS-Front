import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/header/header';
import Footer from './components/footer/footer';
import FOTOTESTE from './images/Group 1.png'
import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Emprestimos from './components/emprestimo/emprestimo';
import DashBoard from './components/dashboard/dashBoard';
import Tabela from './components/tabelas/TabelaEmprestimosIndex';
import Formulario from './components/formularios/FormularioIndex';

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
          <Route path="/gerenciaEmprestimo">
            <Emprestimos />
          </Route>
          <Route path="/tabelaLivros">
            <Tabela />
          </Route>
          <Route path="/formulario">
            <Formulario />
          </Route>
        </Switch>
      </Router>
    );
  }
}

function Livros() {
  return <h1>Tabela de Livros</h1>;
}

function Dash() {
  return(
    <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
       <img src={FOTOTESTE} alt="teste"></img>
       <h1>DashBoard</h1>
    </div>
  );
}