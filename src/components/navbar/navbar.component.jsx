import React, {useState} from 'react';

import './navbar.styles.css';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    return (
        <nav className='navbar'>
            <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'} onClick={() => setIsMobile(false)}>
                <a href='#about-me' className='nav-link'>
                    <li>About Me</li>
                </a>
                <a href='https://drive.google.com/file/d/1eJqJBEdhtNbkU0Jq8zL0ISfYjxX1aE_h/view' target='_blank' rel="noreferrer" className='nav-link'>
                    <li>Resume <i class="fa-solid fa-arrow-up-right-from-square"></i></li>
                </a>
                <a href='#skills' className='nav-link'>
                    <li>Skills</li>
                </a>
                <a href='#projects' className='nav-link'>
                    <li>Projects</li>
                </a>
                <a href='#contact' className='nav-link'>
                    <li>Contact</li>
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