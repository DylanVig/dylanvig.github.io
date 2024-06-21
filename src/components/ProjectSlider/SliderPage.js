import { useState, useRef, useEffect } from 'react'
import LanguageButton from './LanguageButton.js'

export default function SliderPage(props) {

  const [ isHovering, setIsHovering ] = useState(false);
  const videoRef = useRef(null);
  const [ isFlipped, setFlipped ] = useState(false);
  const [loaded, setLoaded] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(1), 100);
    return () => clearTimeout(timer);
}, []);

  const handleMouseEnter = () => {
      setIsHovering(true);
      if (videoRef.current) {
          videoRef.current.play().catch(error => {
            console.log("Error");
          });
      }
  };

  const handleMouseMove = () => {
    if (!isHovering) {
      setIsHovering(true);
      if (videoRef.current) {
          videoRef.current.play();
      }
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (videoRef.current) {
        videoRef.current.pause();
    }
  };

  function flip() {
    setFlipped(!isFlipped);
  }

  return (
    <div>
      {!isFlipped ? (
        <div className="slider-container" onClick={flip}>
          <center>
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
              className="video-size"
            >
              {isHovering ? (
                <video
                  ref={videoRef}
                  src={props.video}
                  loop
                  muted
                  preload="auto"
                />
              ) : (
                <img
                  src={props.image}
                  alt={props.title}
                  className="slider-image"
                  style={{ width: '100%', height: 'auto', aspectRatio: '1'}}
                />
              )}
            </div>
            <h3>{props.title}</h3>
            <h4 className="slider-title">{props.time}</h4>
            <p style={{ fontWeight: "600" }}>Click for Details!</p>
          </center>
        </div>
      ) : (
        <div className="slider-container" onClick={flip}>
          <center>
            <h3 className="slider-title2">{props.title}</h3>
            <h4 className="slider-title">{props.time}</h4>
            <p className="slider-description">{props.description}</p>
            <p className="slider-github">
              <a href={props.github} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </p>
            <div className="language-buttons">
              {props.skills.map((skill) => (
                <LanguageButton key={skill} skill={skill} />
              ))}
            </div>
          </center>
        </div>
      )}
    </div>
  );
}