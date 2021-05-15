import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path={process.env.PUBLIC_URL + '/'} component={About} />
        <Route exact path={process.env.PUBLIC_URL + '/portfolio'} component={Portfolio} />
        <Route exact path={process.env.PUBLIC_URL + '/contact'} component={Contact} />
      </div>
    </Router>
  );
}

export default App;
