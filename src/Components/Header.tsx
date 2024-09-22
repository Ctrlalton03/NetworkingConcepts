import React from "react";
import { Link } from 'react-router-dom';
import '../css/header.css';

const Header: React.FC = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/networking-concepts">Networking Concepts</Link></li>
                    <li><Link to="/reflections">Reflection</Link></li>
                    <li><Link to="/contact">Contact Me</Link></li>
                </ul>
            </nav>
        </header> 
    );
};

export default Header;