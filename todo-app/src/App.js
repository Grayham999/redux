import React, { useState } from 'react';
import AddTask from './components/AddTask.js';
import ListTask from './components/ListTask.js';
import './App.css';

const App = () => {
  const [filter, setFilter] = useState('all');

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <AddTask />
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('done')}>Done</button>
        <button onClick={() => setFilter('not')}>Not Done</button>
      </div>
      <ListTask filter={filter} />
    </div>
  );
};

export default App;

