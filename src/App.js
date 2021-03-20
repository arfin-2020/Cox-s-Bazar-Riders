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
import { createContext, useState } from 'react';
import PrivateRouter from './components/PrivateRouter/PrivateRouter';

export const UserContext  = createContext(); 
function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <div className="App">
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <p style={{textAlign:"right"}} > Loged in user Name: {loggedInUser.name}</p>
     <Router>
          <Header/>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRouter path="/book/:type">
              <Book />
            </PrivateRouter>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
