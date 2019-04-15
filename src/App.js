import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './screen/Home';
import History from './screen/History';
import Header from './components/Header';

class App extends Component {

  render() {

    return (

      <div className="App">
          <Header/>
        
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/notre-histoire" component={History} />
            </Switch>
           
      </div>
    );
  }
}

export default App;

      
