import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Replace from './replace';
import Update from './update';


class App extends React.Component {
  state = {
    name: '',
    age: ''
  }

  onSearchTermChange = (name, age) => {
    this.setState({ name: name, age: age })
    console.log(name, 'name', age, 'age')
  }

  onUpdate = (name, age) => {
    this.setState({ name: name, age: age })
    console.log(name, 'update name', age, 'updated age')
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <h3>Form Submission</h3>
          <Switch>
            <Route exact path="/">
              <Replace onSearchTermChange={this.onSearchTermChange} />
            </Route>
            <Route path="/replace">
              <Update onUpdate={this.onUpdate} />
              <h5>{this.state.name}</h5>
              <h5>{this.state.age}</h5>
            </Route>

          </Switch>
        </div>
      </Router>

    );
  }
}


export default App;
