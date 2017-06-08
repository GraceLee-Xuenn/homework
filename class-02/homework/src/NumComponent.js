import React, { PureComponent } from 'react';

class NumComponent extends PureComponent {
    constructor(props) {
        super(props);
    }
    componentWillUpdate(nextProps, nextState) {
        return false;
    }    
    render() {
        var val = this.props.value;
        return (
            <div>
               <button type="button" onClick={() => this.props.keyVal(1)}>1</button>
               <button type="button" onClick={() => this.props.keyVal(2)}>2</button>
               <button type="button" onClick={() => this.props.keyVal(3)}>3</button>
            </div>
        )
    }
}

module.exports = NumComponent;