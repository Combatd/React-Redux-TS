import React from 'react';

export class TodoHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            labelInput: ''
        }
    }

    _onChange(evt) {
        this.setState({ labelInput : evt.target.value })
    }

    render() {
        const filter = this.props.filter;
        return (
            <header>
                <h1>todos <small>(1.5 exercise)</small></h1>
                <div className="addTodo">
                    <input value={this.state.labelInput} onChange={(e) => this._onChange(e)} className="textfield" placeholder="add todo" />
                    <button className="submit">Add</button>
                </div>
                <nav className="filter">
                    <button className={filter === 'all' ? 'selected' : ''}>all</button>
                    <button className={filter === 'active' ? 'selected' : ''}>active</button>
                    <button className={filter === 'completed' ? 'selected' : ''}>completed</button>
                </nav>
            </header>
        );
    }
}
