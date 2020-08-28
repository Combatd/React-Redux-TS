import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0
        }
    }
    

    render() {
        // object destructuring
        const { text } = this.props;
        const { clicks } = this.state;
        return (
            <div>
                {text} : {clicks}
                <button>Click Here!</button>
            </div>
        )
    }
}