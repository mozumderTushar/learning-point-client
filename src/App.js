import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ About } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
