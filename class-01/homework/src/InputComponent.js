import React, { Component } from 'react';

class InputComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
               <input type="text" id={this.props.idName}></input>
               <button type="button" onClick={this.keyVal.bind(null, this.props.idName, 1)}>1</button>
               <button type="button" onClick={this.keyVal.bind(null, this.props.idName, 2)}>2</button>
               <button type="button" onClick={this.keyVal.bind(null, this.props.idName, 3)}>3</button>
            </div>
        )
    }
    keyVal(idName, v){
        document.getElementById(idName).value += v;
    }
}

module.exports = InputComponent;