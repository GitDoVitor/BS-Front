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
import Emprestimos from './components/emprestimo/emprestimo';
import DashBoard from './components/dashboard/dashBoard';
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
          <Route path="/gerenciaEmprestimo">
            <Emprestimos />
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