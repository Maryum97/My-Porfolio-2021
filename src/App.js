import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path={'/'} component={About} ></Route>
        <Route exact path={'/portfolio'} component={Portfolio} ></Route>
        <Route exact path={'/contact'} component={Contact} ></Route>
      </Switch>
    </Router>
  );
}

export default App;
