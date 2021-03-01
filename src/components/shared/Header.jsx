import React from 'react';

const Header = (props) => {
    return (
        <header className="m-auto">
            <h4 className="headingTitle">{props.title}</h4>
        </header>
    );
}

export default Header;