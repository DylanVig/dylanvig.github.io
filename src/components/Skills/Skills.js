import { SKILLS_DATA } from './SkillsData.js'
import SkillsButton from './SkillsButton.js'
import './SkillsButton.css'

export default function Skills() {
    return (
        <div className='skillSection'>
            <center>
                {SKILLS_DATA.map((skill) => (
                    <SkillsButton key={skill.title} name={skill.title} />
                ))}
            </center>
        </div>
    )
}