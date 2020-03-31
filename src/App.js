import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import System from './components/System';
import Mobile from './components/Mobile';
import Bistro from './components/Bistro';

function App() {
  return (
    <div style={styles.app}>
      <Router>
        <Switch>
          <Route path='/system'
            render={(routeProps) => (
              <System {...routeProps} />
            )} />
          <Route path='/mobile'
            render={(routeProps) => (
              <Mobile {...routeProps} />
            )} />
          <Route path='/bistro'
            render={(routeProps) => (
              <Bistro {...routeProps} />
            )} />
          <Route path='/'
            render={(routeProps) => (
              <Home {...routeProps} />
            )} />
        </Switch>
      </Router>
    </div>
  );
}

const styles = ({
  app: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default App;
