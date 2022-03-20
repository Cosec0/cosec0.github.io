import React from 'react';

import './about-me.styles.css';

import pic from '../../assets/images/me.jpg';

const AboutMe = () => {
    return (
        <section id="about-me" className='about-me'>
            <h2>About me</h2>
            <div className="about-me-grid">
                <div className="profile-pic">
                    <img src={pic} alt='profile pic'/>
                </div>
                <div className="bio">
                    <p>
                    Hi! My name is Kaushik Kumar Barman and I am an aspiring Frontend Engineer from Guwahati. I have experience working in React and Javascript projects of my own and as well as working as
                    technical consultant with over seas client in my professional space.
                    Apart from these I also very passionate exploring new technologies and being part of such teams to work and learn together with.
                    </p>
                    <p>
                        Please find some of my personal projects and also my resume for my complete work experience
                    </p>
                    <p>
                        Currently seeking a junior developer role to enhance and explore my technical knowledge in ReactJS and other such technologies. Tech-savvy and a fast learner with innate communication skills and natural curiosity.
                    </p>
                    <p>
                        Please do contact me in my <a href="mailto:kaushik_barman@outlook.com">email</a> if you have a job opportunity for me or just want to chat on something.
                    </p>
                    <a href='https://drive.google.com/file/d/1eJqJBEdhtNbkU0Jq8zL0ISfYjxX1aE_h/view' target='_blank' className='resume-link' rel="noreferrer">Resume</a>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;