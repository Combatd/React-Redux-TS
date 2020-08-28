import React from 'react';
import './App.css';

import { TodoHeader } from './components/TodoHeader';
import { TodoFooter } from './components/TodoFooter';

export default class TodoApp extends React.Component {
  render() {
    return (
      <div>
        <TodoHeader />
        <TodoFooter />
      </div>
    );
  }
}
