import React from 'react';
import './App.css';

import { TodoHeader } from './components/TodoHeader';

export default class TodoApp extends React.Component {
  render() {
    return (
      <div>
        <TodoHeader />
      </div>
    );
  }
}
