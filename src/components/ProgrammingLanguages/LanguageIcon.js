import './Languages.css'

export default function LanguageIcon(props) {
  return (
    <div className="Languages-Boxes">
      <img src={props.image} alt={props.title} />
    </div>
  );
}