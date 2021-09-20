import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/js/src/collapse.js";
import NavInput from './components/NavInput'
import Info from './components/Info'
import Nav from './components/Nav';
import Foot from './components/Foot'

function App() {
  return (
    <Router>
      <Switch>
        <Route  exact path = '/'>
        <div className="App">
           <NavInput></NavInput>
           <Foot></Foot>
        </div>
        </Route>
        <Route exact path = '/info/:id'>
          <div className="color backColor">
          <Nav></Nav>
          <Info></Info>
          <Foot></Foot>
          </div>
        </Route>
        <Route>
          <div>
            Page not found, go back to <Link to='/'><strong>Home</strong></Link>
          </div>
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
