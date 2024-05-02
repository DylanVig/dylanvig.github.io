import "./Intro.css";
import headshot from "../../assets/headshot.jpg";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";
import ResumeView from './ResumeView.js';
import resume from "../../assets/Dylan_Vig_Resume.pdf";

export default function Intro() {
  const navigate = useNavigate();

  function contact() {
    navigate("/contact")
  }

  function openResume() {
    <ResumeView pdf={resume} />
  }

  return (
    <section className="intro">
      <div className="section_pic_container">
        <img src={headshot} alt="Profile Picture" />
      </div>
      <div className="section_text">
        <p className="section_text_p1">Hello, I'm</p>
        <h1 className="title">Dylan Vig</h1>

        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Software Developer",
            1500, // wait 1s before replacing "Mice" with "Hamsters"
            "CS Student",
            1500,
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
