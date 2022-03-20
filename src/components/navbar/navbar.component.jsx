import React, {useState} from 'react';

import './navbar.styles.css';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    return (
        <nav className='navbar'>
            <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'} onClick={() => setIsMobile(false)}>
                <a href='#' className='nav-link'>
                    <li>Home</li>
                </a>
                <a href='#' className='nav-link'>
                    <li>About</li>
                </a>
                <a href='#' className='nav-link'>
                    <li>Contact</li>
                </a>
                <a href='#' className='nav-link'>
                    <li>Sign up</li>
                </a>
            </ul>
            <button className='mobile-menu-icon' onClick={() => setIsMobile(prev => !prev)}>
                {
                    isMobile ?
                    <i className='fas fa-times'></i> :
                    <i className='fas fa-bars'></i>
                }
            </button>
        </nav>
    )
}

export default Navbar;