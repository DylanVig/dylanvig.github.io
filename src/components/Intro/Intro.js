import "./Intro.css";
import headshot from "../../assets/headshot.jpg";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";
import ResumeView from "./ResumeView.js";
import resume from "../../assets/Resume_Dylan_Vig.pdf";

export default function Intro() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="portrait-frame">
        <img src={headshot} alt="Dylan Vig" />
      </div>
      <div className="hero-copy">
        <p className="greeting">Hello, I'm</p>
        <h1 className="hero-name">Dylan Vig</h1>
        <p className="degree-line">
          B.S. Computer Science, Cornell University
          <span>Expected May 2027</span>
        </p>
        <TypeAnimation
          sequence={[
            "Software Engineer",
            1500,
            "Cornell CS Student",
            1500,
            "Full-Stack Developer",
            1500,
            "Balloon Twister",
            1500,
          ]}
          wrapper="span"
          speed={30}
          className="role-cycle"
          repeat={Infinity}
        />
        <div className="hero-actions">
          <ResumeView pdf={resume} />
          <button className="btn btn-secondary" onClick={() => navigate("/contact")}>
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}
