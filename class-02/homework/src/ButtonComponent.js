import React, { PureComponent } from 'react';

const ButtonComponent = (props) => {
    return (
        <div>
            <button type="button" style={{width:"25px"}} onClick={() => props.compute(props.valName)}>{props.valName}</button>
        </div>
    )
}

module.exports = ButtonComponent;