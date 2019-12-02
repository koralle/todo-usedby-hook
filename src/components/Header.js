import React from 'react';
import './Header.css'

const Header = (props) => {

    return (
        <div className="todo-header">
            <h1>{props.headerTitle}</h1>
        </div>
    );
}

export default Header;