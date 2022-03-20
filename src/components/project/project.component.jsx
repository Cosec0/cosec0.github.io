import './project.styles.css';

const Project = ({ name, pic, github_link, demo_link }) => (
    <div className="project-card" class='project-card'>
        <img src={pic} alt={name}/>
        <p>{name}</p>
        <a href={github_link} target='_blank' rel="noreferrer">
            <i class="fa-brands fa-github"></i>
        </a>
        <a href={demo_link} target='_blank' rel="noreferrer">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
    </div>
)

export default Project