import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    <div>
      {props.TodoList.map(item => (
        <Todo 
        key= {item.id}
        item = {item}
        toggleCompleted = {props.toggleCompleted}
        />
      ))}

      <button className='clearButton' onClick={props.clearCompleted}> Clear Completed Tasks </button>
    </div>
  );
};

export default TodoList;