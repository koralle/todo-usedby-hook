import React from 'react';
import './Footer.css'

const Footer = (props) => {

    return (
        <footer className="todo-footer">
            <p>{props.footerText}</p>
        </footer>
    );
}

export default Footer;