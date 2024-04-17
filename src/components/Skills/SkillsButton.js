import './SkillsButton.css'

export default function SkillsButton(props) {
    return (
      <div className="SkillsButton">
        <button>{props.name}</button>
      </div>
    );
}