import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import { Search } from './components/Search/Search';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Recipe } from './views/Recipe/Recipe';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/recipe/:recipe">
            <Recipe />
          </Route>
          <Route path="/">
            <Search />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
