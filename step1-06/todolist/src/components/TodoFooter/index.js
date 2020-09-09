import React from 'react';

export class TodoFooter extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {

    }

    render() {
        const itemCount = Object.keys(this.props.todos).filter( (id) => { return !this.props.todos[id].completed } ).length 
        return(
            <footer>
                <span>{itemCount} items left</span>
                <button className="submit">Clear Completed</button>
            </footer>
        )
    }
}