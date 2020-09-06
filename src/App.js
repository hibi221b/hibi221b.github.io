import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, Arwes } from 'arwes';
import HeaderComponent from './components/Header';

import Home from './pages/Home';
import Articles from './pages/Articles';

const App = () => {
  return (
    <ThemeProvider theme={createTheme()}>
      <Arwes animate show>
        <Router>
          <HeaderComponent />
          <div className="main">
            <Switch>
              <Route path="/" exact  component={Home} />
              <Route path="/article" component={Articles} />
            </Switch>
          </div>
        </Router>
      </Arwes>
    </ThemeProvider>
  );
}

export default App;
