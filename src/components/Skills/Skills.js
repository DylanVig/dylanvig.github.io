import { SKILL_GROUPS } from "./SkillsData.js";
import "./SkillsButton.css";

export default function Skills() {
  return (
    <div className="skill-groups">
      {SKILL_GROUPS.map((group) => (
        <section key={group.label} className="skill-group">
          <h3>{group.label}</h3>
          <ul>
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
