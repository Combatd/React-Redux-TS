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

    return (
        <React.Fragment>
            <ul className="todos">
                { items }
            </ul>
        </React.Fragment>
    )

}