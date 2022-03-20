import React from 'react';

import './contact.styles.css';

function Contact() {
    return (
        <section id="contact" class="bg-blue">
            <h2>Contact</h2>
            <p>You can catch me on</p>
            <ul class="social-ul">
            <li><a href="https://twitter.com/cosec_0" target="_blank" rel="noreferrer"><i class="fab fa-twitter"></i></a></li>
            <li><a id="profile-link" href="https://github.com/Cosec0" target="_blank" rel="noreferrer"><i class="fab fa-github"></i></a></li>
            <li><a href="https://www.linkedin.com/in/kaushik-kumar-barman-23a93715b/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin"></i></a></li>   
            </ul>
        </section>
    )
}

export default Contact