import './Footer2.css'

export default function FooterBoxes(props) {
    return (
      <div className="Footer-Boxes">
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <img src={props.image} alt={props.title} />
        </a>
      </div>
    );
}