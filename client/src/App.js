import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import SearchBooks from "./pages/SearchBooks";
import SavedBooks from "./pages/SavedBooks";
import Nav from "./components/Nav";
import './App.css';

function App() {
  return (    
  <Router>

      <Nav />
      <Switch>
      <Route exact path="/savedbooks" component={SavedBooks} />
        <Route exact path="/" component={SearchBooks} />
        <Route component={NoMatch} />
      </Switch>

  </Router>
  );
}

export default App;
