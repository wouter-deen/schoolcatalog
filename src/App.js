import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Homepage from './components/Homepage/Homepage'
import Natuurkunde from './components/School/Vakken/Natuurkunde/Natuurkunde'
import Scheikunde from './components/School/Vakken/Scheikunde/Scheikunde'

function App() {
  return (
    <Router>
      <div>
        <Route exact path='/schoolcatalog' component={Homepage}/>
        <Route exact path='/schoolcatalog/vakken/natuurkunde' component={Natuurkunde}/>
        <Route exact path='/schoolcatalog/vakken/scheikunde' component={Scheikunde}/>
      </div>
    </Router>
  );
}

export default App;
