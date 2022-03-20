import React from 'react';

import './projects-list.styles.css';

import Project from '../project/project.component';
import { PROJECTS_DATA as projects } from './projects.data';

function Projects() {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div class="projects-container">
                {
                    projects.map(project => (
                        <Project key={project.project_id} {...project}/>
                    ))
                }            
            </div>
        </section>
    )
}

export default Projects;