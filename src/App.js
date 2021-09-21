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
import MoreSubject from './components/Home/MoreSubject/MoreSubject';
import ContactUs from './components/Shared/ContactUs/ContactUs';
import Footer from './components/Shared/Footer/Footer';
import Navigation from './components/Shared/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/more-subject" component={ MoreSubject } />
          <Route path="/about" component={ About } />
          <Route path="/contact-us"> <Navigation /> <ContactUs /> <Footer /> </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
