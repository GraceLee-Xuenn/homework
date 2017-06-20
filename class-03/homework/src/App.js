import React, { Component } from 'react';
import { connect } from 'react-redux';
import action from './action';

import NumComponent from './NumComponent';
import ButtonComponent from './ButtonComponent';
import LogComponent from './LogComponent';
const App = ({
    state: {
        num,
        value,
        logData
    },
    keyVal,
    compute,
    revertData,
    fetchData
}) => {
    const logList = logData.map((data, index) => {
        data.index = index;
        return <LogComponent key={ index } data={ data } revertData={ revertData }/>
    })
    return (
        <div>
            <button onClick={fetchData}>Get default data.</button>
            <NumComponent keyVal={ keyVal }/>
            Operator
            <ButtonComponent valName={ "+" } compute={ compute }/>
            <ButtonComponent valName={ "-" } compute={ compute }/>
             Value=
            <span id="value">{ value }</span><hr/>
            Please click log to revert data
            <ul>
                { logList }
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return { state };
}
const mapDispatchToProps = (dispatch) => ({
    keyVal: (num) => dispatch(action.keyVal(num)),
    compute: (op) => dispatch(action.compute(op)),    
    revertData: (data) => dispatch(action.revertData(data)),
    fetchData: () => dispatch(action.fetchData()),
});

module.exports = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);