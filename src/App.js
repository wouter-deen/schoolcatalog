import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Homepage from './components/Homepage/Homepage'
import Natuurkunde from './components/School/Vakken/Natuurkunde/Natuurkunde'
import Scheikunde from './components/School/Vakken/Scheikunde/Scheikunde'
import Vakken from './components/School/Vakken/Vakken'
import RegisterPage from "./components/Firebase/RegisterPage";
import {AuthProvider} from "./components/Firebase/Auth";
import PrivateRoute from "./components/Firebase/PrivateRoute";
import Dashboard from "./components/Firebase/Dashboard/Dashboard";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/registreren' component={RegisterPage}/>
        <PrivateRoute exact path='/dashboard' component={Dashboard}/>
        <PrivateRoute exact path='/vakken' component={Vakken}/>
        <PrivateRoute exact path='/vakken/natuurkunde' component={Natuurkunde}/>
        <PrivateRoute exact path='/vakken/scheikunde' component={Scheikunde}/>
      </Router>
    </AuthProvider>
  )
}

export default App;
