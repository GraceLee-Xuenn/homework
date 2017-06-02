import React, { Component } from 'react';

class ButtonComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
               <button type="button" style={{width:"25px"}} onClick={this.compute.bind(null, this.props.valName, this.props.paraObj)}>{this.props.valName}</button>
            </div>
        )
    }
    compute(op, para){
        var input1 = document.getElementById(para.input1).value=="" ? 0 : parseInt(document.getElementById(para.input1).value);
        var input2 = document.getElementById(para.input2).value=="" ? 0 : parseInt(document.getElementById(para.input2).value);
        var val = document.getElementById(para.value);
        if(op=='+'){
            val.innerHTML=input1+input2;
        }else{
            val.innerHTML=input1-input2;
        }
    }
}

module.exports = ButtonComponent;