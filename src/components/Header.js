import React from 'react';

const Header = ({ isOpen }) => (
    <header className={`menu ${isOpen ? 'open' : ''}`}>
        <a href='#journey'>JOURNEY</a>
        <a href='#techStack'>TECH STACK</a>
        <a href='#projects'>PROJECTS</a>
        <a href='#contact'>GET IN TOUCH</a>
    </header>
);

export default Header;