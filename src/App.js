import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div style={styles.app}>
      <Router>
        <Switch>
          <Route path='/'
            render={(routeProps) => (
              <Home {...routeProps} />
            )} />
          <Route path='/contact'
            render={(routeProps) => (
              <Home {...routeProps} />
            )} />
          <Route path='/download'
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
