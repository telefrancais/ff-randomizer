import React from 'react';

// stateless functional component
const Header = (props) => (
    <div className="header">
        <div className="container">
            <h1 className="header__title">{props.title}</h1>
        </div>
    </div>
);

// creates default prop if one isn't provided.
Header.defaultProps = {
    title: 'Fantasy Football Randomizer'
};

// need to use this style when using stateless function components.
export default Header;