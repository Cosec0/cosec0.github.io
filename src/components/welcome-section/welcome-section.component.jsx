import React from 'react';

import './welcome-section.styles.css';

const WelcomeSection = () => {
    return (
        <header id="welcome-section">
            <h1>Hello !</h1>
            <p>My name is </p>
            <p>Kaushik Kumar Barman </p>
            <p>and I am an aspiring Frontend Engineer</p>
            <div className='blink_me'><h2>﹀</h2></div>
        </header>
    )
}

export default WelcomeSection