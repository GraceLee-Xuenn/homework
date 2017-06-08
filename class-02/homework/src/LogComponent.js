import React from 'react';

const LogComponent = (props) => {
    return(
        <li className={ props.data.isDelete ? 'deleteLine' : '' } onClick={ () => props.revertData(props.data) }>
            { props.data.num }
        </li>
    )
}

module.exports = LogComponent;