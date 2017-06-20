import React from 'react';

const NumComponent = (props) => {
    return (
        <div>
        <button type="button" onClick={ () => props.keyVal(1) }>1</button>
        <button type="button" onClick={ () => props.keyVal(2) }>2</button>
        <button type="button" onClick={ () => props.keyVal(3) }>3</button>
        </div>
    )
}

module.exports = NumComponent;