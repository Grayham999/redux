import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = ({ filter }) => {
  const tasks = useSelector((state) => {
    console.log(state); // Inspect the state structure
    return filter === 'all'
      ? state.tasks.tasks
      : state.tasks.tasks.filter((task) => task.isDone === (filter === 'done'));
  });

  console.log(tasks); // Log tasks to debug

  return (
    <div>
      {Array.isArray(tasks) && tasks.length > 0 ? (
        tasks.map((task) => <Task key={task.id} task={task} />)
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  );
};

export default ListTask;
