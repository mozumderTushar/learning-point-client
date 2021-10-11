import * as React from 'react';
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
import SignIn from './components/SignIn/SignIn';
import StudentSignup from './components/StudentSignup/StudentSignup';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoute from './components/SignIn/PrivateRoute';
import TeacherSignup from './components/TeacherSignup/TeacherSignUp';
import AllTeachers from './components/AllTeachers/AllTeachers';
import Details from './components/AllTeachers/Details';

export const UserContext = React.createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = React.useState({});
  return (
    <UserContext.Provider value={ [loggedInUser, setLoggedInUser] }>
      <Router>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/more-subject" component={ MoreSubject } />
          <PrivateRoute path="/about" component={ About } />
          <Route path="/log-in" component={ SignIn } />
          <Route path="/registration-student" component={ StudentSignup } />
          <Route path="/registration-teacher" component={ TeacherSignup } />
          <PrivateRoute path="/dashboard"> <Dashboard /> </PrivateRoute>
          <Route path="/contact-us"> <Navigation /> <ContactUs /> <Footer /> </Route>
          <Route path="/all-teacher"> <Navigation /> <AllTeachers /> <Footer /> </Route>
          <PrivateRoute path="/teacher-info/:teacherId"> <Navigation /> <Details /> <Footer /> </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
