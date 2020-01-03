import React from 'react';
import logo from './logo.svg';

import './App.css';
import Greet from './components/Greet';
import Message from './components/Message';
import Counter from './components/Counter';
import PersonList from './components/PersonList';
import TodoList from './components/TodoList';
import Form from './components/Form';



function App() {
  return (
    <div className="App">
    {/* <TodoList/> */}
    <Form/>
    </div>
  );
}

export default App;
