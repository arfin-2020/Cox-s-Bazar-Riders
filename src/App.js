import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Book from './components/Book/Book';
function App() {
  return (
    <div className="App">
     <Router>
          <Header/>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Book path="/book">
              <Book />
            </Book>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
