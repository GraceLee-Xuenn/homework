import React, { Component } from 'react';
var InputComponent = require('./InputComponent');
var ButtonComponent = require('./ButtonComponent');
class App extends Component {
    render() {
        var parameters={
            input1 : "input1",
            input2 : "input2",
            value : "value"
        }
        return (
            <div>
                Input1=<InputComponent idName={"input1"}/>
                Input2=<InputComponent idName={"input2"}/>
                Operator
                <ButtonComponent valName={"+"} paraObj={parameters}/>
                <ButtonComponent valName={"-"} paraObj={parameters}/>
                Value=
                <span id="value"></span>
            </div>
        )
    }
}

module.exports = App;