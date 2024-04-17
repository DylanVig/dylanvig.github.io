import { useState, useRef } from 'react'

export default function SliderPage(props) {

  const [ isHovering, setIsHovering ] = useState(false);
  const videoRef = useRef(null);

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

  return (
    <div className="slider-container">
      <center>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove} className="video-size">
        {isHovering ? (
          <video
            ref={videoRef}
            src={props.video} // props.video should be the path to your video file
            loop
            muted // Consider autoplaying videos muted to adhere to browser policies
            preload="auto"
          />
        ) : (
          <img src={props.image} alt={props.title} className="slider-image" />
        )}
        </div>
          <h3 className="slider-title">{props.title}</h3>
          <h4 className="slider-title">{props.time}</h4>
          <p className="slider-description">{props.description}</p>
          <p className="slider-github">{props.github}</p>
      </center>
    </div>
  );
}