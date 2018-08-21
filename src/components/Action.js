import React from 'react';

// stateless functional component
const Action = (props) => (
    <div>
        <button
            className="big-button" 
            disabled={!props.hasOptions}
            onClick={props.handlePick}
        >Scramble Teams</button>
    </div>
);

// need to use this style when using stateless function components.
export default Action;