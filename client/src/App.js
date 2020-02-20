import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import SearchBooks from "./pages/SearchBooks";
import Nav from "./components/Nav";
import './App.css';

function App() {
  return (    
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={SearchBooks} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
