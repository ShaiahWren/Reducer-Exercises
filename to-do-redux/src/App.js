import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Todo from './components/Todo';
import VisibilityFilters from './components/VisibilityFilters';
import './styles.css';

// import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <h2>Quack</h2>
      <AddTodo />
      <TodoList />
      <VisibilityFilters />
     
    </div>
  );
}

export default App;
