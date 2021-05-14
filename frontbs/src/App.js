import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/header/header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>

        <nav>
          <ul>
          <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/tabela">tabela</Link>
            </li>
          </ul>
        </nav>

      </div>

      <Switch>
        <Route path="/tabela">
          <TabelaFoda />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

    </Router>
  );
}

function TabelaFoda() {
  return <h1>Tabela Foda</h1>;
}

function Home() {
  return <h1>Home</h1>;
}

export default App;
