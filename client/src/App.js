import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar";
import FormComponent from './components/FormComponent';
import "./App.css"
import Footer from './components/Footer';
import MockDatabase from './components/MockDatabase';

let users = [];

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/form">
            <FormComponent addUserData={addUserData}/>
          </Route>
          <Route path="/data">
            <MockDatabase users={users} />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

const addUserData = userData => {
  users.push(Object.assign({}, userData));
}

export default App;
