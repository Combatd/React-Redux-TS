import React from "react";

export class TodoListItem extends React.Component {
    render() {
        const { label, completed } = this.props;

        return (
            <li className="todo">
                <label>
                    <input type="checkbox" checked={completed} onChange={() => undefined} /> {label}
                </label>
            </li>
        );
    }
}
