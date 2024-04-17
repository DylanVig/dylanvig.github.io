import { SKILLS_DATA } from './SkillsData.js'

export default function Skills() {
    return (
        <div>
            <center>
                <h1>Skills</h1>
                {SKILLS_DATA.map((skills) => (
                    <button>{ skills.title }</button>
                ))}
            </center>
        </div>
    )
}