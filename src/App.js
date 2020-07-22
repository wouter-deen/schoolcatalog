import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Homepage from './components/Homepage/Homepage'
import Natuurkunde from './components/School/Vakken/Natuurkunde/Natuurkunde'
import Scheikunde from './components/School/Vakken/Scheikunde/Scheikunde'
import Vakken from './components/School/Vakken/Vakken'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/vakken' component={Vakken}/>
        <Route exact path='/vakken/natuurkunde' component={Natuurkunde}/>
        <Route exact path='/vakken/scheikunde' component={Scheikunde}/>
      </div>
    </Router>
  );
}

export default App;
