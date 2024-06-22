import "./Intro.css";
import headshot from "../../assets/headshot.jpg";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";
import ResumeView from './ResumeView.js';
import resume from "../../assets/Resume_Dylan_Vig.pdf";

export default function Intro() {
  const navigate = useNavigate();

  function contact() {
    navigate("/contact")
  }

  return (
    <section className="intro">
      <div className="section_pic_container">
        <img src={headshot} />
      </div>
      <div className="section_text">
        <p className="section_text_p1">Hello, I'm</p>
        <h1 className="title">Dylan Vig</h1>

        <TypeAnimation
          sequence={[
            "Software Engineer",
            1500, 
            "CS Major",
            1500,
            "Cornell Student",
            1500,
            "Java Enthusiast",
            1500,
            "Full-Stack Developer",
            1500,
            "One Intern",
            1500,
            "Mage Data Intern",
            1500,
            "Balloon Twister",
            1500
          ]}
          wrapper="span"
          speed={30}
          style={{
            color: "white",
            fontFamily: "Palatino",
            fontSize: "35px",
            display: "inline-block",
            fontWeight: "600",
          }}
          repeat={Infinity}
        />
        <div class="button_container">
          <ResumeView pdf={resume}></ResumeView>
          <button className="btn-color-2" onClick={contact}>
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}
