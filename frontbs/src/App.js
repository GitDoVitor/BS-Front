import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/header/header';
import Footer from './components/footer/footer';

function App() {
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
        <Route path="/">
          <Dash />
        </Route>
        <Route path="/gerenciaEmprestimo">
          <Emprestimos />
        </Route>
      </Switch>

    </Router>
  );
}

function Livros() {
  return <h1>Tabela de Livros</h1>;
}

function Dash() {
  return <h1>DashBoard</h1>;
}

function Emprestimos() {
  return <h1>Tabela de Emprestimos</h1>;
}

export default App;
