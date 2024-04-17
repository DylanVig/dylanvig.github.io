import './Languages.css'
import { LANGUAGE_DATA } from './LanguagesData.js'
import LanguageIcon from './LanguageIcon.js'

export default function ProgrammingLanguages () {
    return (
        <div className="Languages-Data-Container">
            {LANGUAGE_DATA.map((language) => (
                <div>
                    <LanguageIcon key={language.title} {...language} />
                </div>
            ))}
        </div>
    )
}