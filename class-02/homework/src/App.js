import React, { Component } from 'react';
import NumComponent from './NumComponent';
import ButtonComponent from './ButtonComponent';
import LogComponent from './LogComponent';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {num: 0, value: 0, logData: []};
    }
    render() {
        const { logData } = this.state;
        const logList = logData.map((data, index) => {
            data.index = index;
            return <LogComponent key={ index } data={ data } revertData={ this.revertData }/>
        })
        return (
            <div>
                <NumComponent keyVal={ this.keyVal }/>
                Operator
                <ButtonComponent valName={ "+" } compute={ this.compute }/>
                <ButtonComponent valName={ "-" } compute={ this.compute }/>
                Value=
                <span id="value">{ this.state.value }</span><hr/>
                Please click log to revert data
                <ul>
                    { logList }
                </ul>
            </div>
        )
    }
    keyVal = (value) => {
         this.setState({ num: value });
    }
    compute = (op) => {
        const num = this.state.num; 
        const val = this.state.value;
        const log = {};
        log.num = 0;
        log.isDelete = false;
        if(op === '+'){
            log.num = +num;
            this.setState({value: val + num});
        }
        if(op === '-'){
            log.num = -num;
            this.setState({value: val - num});
        }
        this.setState({ logData: this.state.logData.concat(log) });
    }
    revertData = (data) => {
        const val = data.isDelete ? this.state.value + data.num : this.state.value - data.num;
        const newLogData = this.state.logData;
        newLogData[data.index].isDelete = !data.isDelete;
        this.setState({ value: val, logData: newLogData });
    }
}

module.exports = App;