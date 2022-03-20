import React from 'react';

import './skills-list.styles.css';

import Skill from '../skill/skill.component';
import { SKILLS_DATA as skills } from './skills-data';

function Skills() {
    return (
        <section id="skills">
            <h2>Skills</h2>
            <div class="skills-container">
                {
                    skills.map(skill => (
                        <Skill id={skill.skill_id} {...skill}/>
                    ))
                }
            </div>
        </section>
    )
}

export default Skills;