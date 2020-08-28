import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0
        }
    }

    // underscore syntax for event handlers
    _onButtonClick() {
        this.setState({
            clicks: this.state.clicks + 1
        })
    }

    render() {
        // object destructuring
        const { text } = this.props;
        const { clicks } = this.state;
        return (
            <React.Fragment>
                {text} : {clicks}
                <button onClick={(e) => {this._onButtonClick(e)}}>Click Here!</button>
            </React.Fragment>
        )
    }
}

export default Counter;