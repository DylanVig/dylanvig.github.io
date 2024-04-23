import './SkillsButton.css'

export default function SkillsButton(props) {
    return (
      <div className='skills-button'>
        <button>{props.name}</button>
      </div>
    );
}