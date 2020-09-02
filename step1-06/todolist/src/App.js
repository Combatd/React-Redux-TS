import React from 'react';
import './App.css';

import { TodoHeader } from './components/TodoHeader';
import { TodoFooter } from './components/TodoFooter';
import { TodoList } from './components/TodoList';

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      todos: {
        '04' : {
          label: 'Todo 4',
          completed: true
        },
        '03': {
          label: 'Todo 3',
          completed: false
        },
        '02': {
          label: 'Todo 2',
          completed: false
        },
        '01': {
          label: 'Todo 1',
          completed: false
        }
      },
      filter: 'active'

    }
  }

  render() {
    return (
      <div>
        <TodoHeader />
        <TodoList />
        <TodoFooter />
      </div>
    );
  }
}
