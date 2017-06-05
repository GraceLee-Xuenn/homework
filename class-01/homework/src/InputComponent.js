import React, { Component } from 'react';

class InputComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var val = this.props.value;
        return (
            <div>
               <input type="text" value={this.props.value}></input>
               <button type="button" onClick={() => this.props.keyVal(this.props.name, 1)}>1</button>
               <button type="button" onClick={() => this.props.keyVal(this.props.name, 2)}>2</button>
               <button type="button" onClick={() => this.props.keyVal(this.props.name, 3)}>3</button>
            </div>
        )
    }
}

module.exports = InputComponent;