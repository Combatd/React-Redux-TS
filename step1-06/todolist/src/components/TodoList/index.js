import React from 'react';
import { TodoListItem } from '../TodoListItem';

export const TodoList = (props) => {
    const numbers = [1,2,3,4];
    const items = numbers.map( (number) => {
        return(
            <React.Fragment>
                <li class="todo">
                    <label><input type="checkbox" /> Todo {number}</label>
                </li>
            </React.Fragment>
        )
    });
    const { filter, todos } = props;
    const filteredTodos = Object.keys(todos).filter(id => {
        return filter === 'all' || (filter === 'completed' && todos[id].completed) || (filter === 'active' && !todos[id].completed);
    });
    return (
        <React.Fragment>
            <ul className="todos">
                {filteredTodos.map( (id) => ( 
                    <TodoListItem key={id} id={id} {...todos[id]} />
                ))}
            </ul>
        </React.Fragment>
    )

}