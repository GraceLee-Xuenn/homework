import React, { Component } from 'react';

class ButtonComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
               <button type="button" style={{width:"25px"}} onClick={() => this.props.compute(this.props.valName)}>{this.props.valName}</button>
            </div>
        )
    }
}

module.exports = ButtonComponent;