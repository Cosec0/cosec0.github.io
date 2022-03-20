import './skill.styles.css';

const Skill = ({ name, pic, alt }) => (
    <div className="skill">
        <img src={pic} alt={alt}/>
        <p className='skill-title'>{name}</p>
    </div>
)

export default Skill;