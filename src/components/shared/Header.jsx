import React from 'react';

const Header = (props) => {
    return ( 
        <div className="nav">
            <h4 className="nav-item">{props.title}</h4>
        </div>
     );
}
 
export default Header;