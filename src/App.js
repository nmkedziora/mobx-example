import React, { Component } from 'react';

import ToDo from './ToDo';
import toDoStore from './ToDoStore';
import SampleForm from './SampleForm';
import sampleFormStore from './SampleFormStore';

import MobxForm from './MobxForm';
import mobxForm from './forms/mobxForm';
import mobxFormStore from './MobxFormStore';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <ToDo store={toDoStore}/>

        <h1>sample form with mobx</h1>
        <SampleForm store={sampleFormStore} />

        <h1>sample form with mobx-form</h1>
        <MobxForm form={mobxForm} />
      </div>
    );
  }
}

export default App;
