import React, { Component } from 'react';
import InputComponent from './InputComponent';
import ButtonComponent from './ButtonComponent';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {input1:"", input2:"", value:0};
    }
    render() {
        return (
            <div>
                Input1=<InputComponent name={"input1"} value={this.state.input1} keyVal={this.keyVal}/>
                Input2=<InputComponent name={"input2"} value={this.state.input2} keyVal={this.keyVal}/>
                Operator
                <ButtonComponent valName={"+"} compute={this.compute}/>
                <ButtonComponent valName={"-"} compute={this.compute}/>
                Value=
                <span id="value">{this.state.value}</span>
            </div>
        )
    }
    keyVal = (name, v) => {
        if(name=='input1')
         this.setState({input1: this.state.input1+=v});
        if(name=='input2')
         this.setState({input2: this.state.input2+=v});
    }
    compute = (op) => {
        var input1 = this.state.input1=="" ? 0 : parseInt(this.state.input1);
        var input2 = this.state.input2=="" ? 0 : parseInt(this.state.input2);
        if(op=='+')
            this.setState({value: input1 + input2});
        if(op=='-')
            this.setState({value: input1 - input2});
    }
}

module.exports = App;