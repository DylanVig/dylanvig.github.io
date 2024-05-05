import './LanguageButton.css'

export default function LanguageButton(props) {
    return (
        <div className='language-button'>
            <button>{props.skill}</button>
        </div>
    )
}