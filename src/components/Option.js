import React from 'react';

// stateless functional component
const Option = (props) => (
    <div className="option">
        <p className="option__text">{props.count}. {props.optionText}</p>
        <button className="button button--link" onClick={(e) => {
            props.handleDeleteOption(props.optionText);
        }}>remove</button>
    </div>
);

// need to use this style when using stateless function components.
export default Option;