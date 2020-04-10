import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css'

const dataTodo = [
  {
    task: "Clean Office",
    id: 1,
    completed: false
  },
  {
    task: "Take out the Trash",
    id: 2,
    completed: false
  },
  {
    task: "Wash the Dog",
    id: 3,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dataTodo: dataTodo
    };
  }
  toggleCompleted = itemId => {
    this.setState({
      dataTodo: this.state.dataTodo.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  addItem = itemName => {
    this.setState({
      dataTodo: [
        ...this.state.dataTodo,
        {
          task: itemName,
          completed: false,
          id: Date.now()
        }
      ]
    });
  };

  clearCompleted = () => {
    this.setState({
      dataTodo: this.state.dataTodo.filter(item => {
        return !item.completed;
      })
    });
  };
  
  render() {
    return (
      <div className="container">
        <TodoForm addItem={this.addItem} />
        <h2>Welcome to my Todo App!</h2>
        <h3>Complete Tasks and Cross them Off</h3>
        <TodoList
          TodoList={this.state.dataTodo}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
