import React from "react";
import './Experience.css';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import education from '../../assets/icons/education.jpg'
import plane from '../../assets/icons/plane.jpg'
import engineering from '../../assets/icons/engineering.jpg'
import cybersecurity from '../../assets/icons/cybersecurity.jpg'
import fintech from '../../assets/icons/fintech.jpg'
import research from '../../assets/icons/research.jpg'
import energy from '../../assets/icons/energy.jpg'

export default function Experience() {

  function Education() {
    return <img src={education} alt='hi' style={{ width: "35px", height: "35px", filter: "invert(100%)" }}/>;
  }

  function Plane() {
    return <img src={plane} alt='hi' style={{ width: "35px", height: "35px", filter: "invert(100%)" }}/>;
  }

  function Engineering() {
    return <img src={engineering} alt='hi' style={{ width: "35px", height: "35px", filter: "invert(100%)" }}/>;
  }

  function Cybersecurity() {
    return <img src={cybersecurity} alt='hi' style={{ width: "35px", height: "35px", filter: "invert(100%)" }}/>;
  }

  function Fintech() {
    return <img src={fintech} alt='hi' style={{ width: "35px", height: "35px", filter: "invert(100%)" }}/>;
  }

  function Research() {
    return <img src={research} alt='hi' style={{ width: "35px", height: "35px", filter: "invert(100%)" }}/>;
  }

  function Energy() {
    return <img src={energy} alt='hi' style={{ width: "35px", height: "35px", filter: "invert(100%)" }}/>;
  }

  return (
    <div className="timeline">
    <VerticalTimeline>
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(155, 155, 155)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(0,0,0)" }}
        date="June 2024 - August 2024"
        iconStyle={{ background: "rgb(155, 155, 155)", color: "#fff", display: 'flex',
        alignItems: 'center',
        justifyContent: 'center' }}
        icon={<Fintech />}
      >
        <h3 className="vertical-timeline-element-title" style={{ fontSize: '35px'}}>One Finance</h3>
        <h4 className="vertical-timeline-element-subtitle" style={{ fontSize: '25px'}}>
          Software Engineering Intern
        </h4>
        <p>
          Creative Direction, User Experience, Visual Design, SEO, Online
          Marketing
        </p>
      </VerticalTimelineElement>
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(155, 155, 155)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(0,0,0)" }}
        date="May 2024 - Present"
        iconStyle={{ background: "rgb(155, 155, 155)", color: "#fff", display: 'flex',
        alignItems: 'center',
        justifyContent: 'center' }}
        icon={<Cybersecurity />}
      >
        <h3 className="vertical-timeline-element-title" style={{ fontSize: '35px'}}>Mage Data</h3>
        <h4 className="vertical-timeline-element-subtitle" style={{ fontSize: '25px'}}>
          Software Engineering Intern
        </h4>
        <p>
          Creative Direction, User Experience, Visual Design, SEO, Online
          Marketing
        </p>
      </VerticalTimelineElement>
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(155, 155, 155)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(0,0,0)" }}
        date="Oct 2023 - Present"
        iconStyle={{ background: "rgb(155, 155, 155)", color: "#fff", display: 'flex',
        alignItems: 'center',
        justifyContent: 'center' }}
        icon={<Plane />}
      >
        <h3 className="vertical-timeline-element-title" style={{ fontSize: '35px'}}>Cornell University Unmanned Air Systems</h3>
        <h4 className="vertical-timeline-element-subtitle" style={{ fontSize: '25px'}}>
        Imaging Systems Software Developer
        </h4>
        <p>
          Creative Direction, User Experience, Visual Design, SEO, Online
          Marketing
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(155, 155, 155)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(0,0,0)" }}
        date="Aug 2023 - Present"
        iconStyle={{ background: "rgb(155, 155, 155)", color: "#fff", display: 'flex',
        alignItems: 'center',
        justifyContent: 'center' }}
        icon={<Education />}
      >
        <h3 className="vertical-timeline-element-title" style={{ fontSize: '35px'}}>Cornell University</h3>
        <h4 className="vertical-timeline-element-subtitle" style={{ fontSize: '25px'}}>Student</h4>
        <p style={{ fontSize: '18px'}}>
          Pursuing a B.E. in Computer Science
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(155, 155, 155)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(0,0,0)" }}
        date="May 2023 - Aug 2023"
        iconStyle={{ background: "rgb(155, 155, 155)", color: "#fff", display: 'flex',
        alignItems: 'center',
        justifyContent: 'center' }}
        icon={<Research />}
      >
        <h3 className="vertical-timeline-element-title" style={{ fontSize: '35px'}}>NYU Jonathan M. Tisch Center of Hospitality</h3>
        <h4 className="vertical-timeline-element-subtitle" style={{ fontSize: '25px'}}>Research Intern</h4>
        <p style={{ fontSize: '18px'}}>
          Researched the impacts of COVID-19 on overtourism under the guidance of Professor Anna Abelson
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(155, 155, 155)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(0,0,0)" }}
        date="Sep 2019 - May 2023"
        iconStyle={{ background: "rgb(155, 155, 155)", color: "#fff", display: 'flex',
        alignItems: 'center',
        justifyContent: 'center' }}
        icon={<Education />}
      >
        <h3 className="vertical-timeline-element-title" style={{ fontSize: '35px'}}>Columbia Grammar and Preparatory School</h3>
        <h4 className="vertical-timeline-element-subtitle" style={{ fontSize: '25px'}}>Student</h4>
        <p style={{ fontSize: '18px'}}>
          Math Club President; Multi-Ethnic Cultural Awareness Club President; Student Government Treasurer
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(155, 155, 155)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(0,0,0)" }}
        date="Jun 2022 - Aug 2023"
        iconStyle={{ background: "rgb(155, 155, 155)", color: "#fff", display: 'flex',
        alignItems: 'center',
        justifyContent: 'center' }}
        icon={<Energy />}
      >
        <h3 className="vertical-timeline-element-title" style={{ fontSize: '35px'}}>Orange Energizing Solutions</h3>
        <h4 className="vertical-timeline-element-subtitle" style={{ fontSize: '25px'}}>Sales Intern</h4>
        <p style={{ fontSize: '18px'}}>
          Organized Company Database, Administered Client Documentation, and researched sustainability programs and potential partnerships; Jun 2022 - Aug 2022 and February 2023 - Aug 2023
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(155, 155, 155)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(0,0,0)" }}
        date="2011 - present"
        iconStyle={{ background: "rgb(155, 155, 155)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">
          Content Marketing for Web, Mobile and Social Media
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
        <p>Strategy, Social Media</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(155, 155, 155)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(0,0,0)" }}
        date="2011 - present"
        iconStyle={{ background: "rgb(155, 155, 155)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">
          Agile Development Scrum Master
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Certification</h4>
        <p>Creative Direction, User Experience, Visual Design</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(155, 155, 155)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(0,0,0)" }}
        date="2011 - present"
        iconStyle={{ background: "rgb(155, 155, 155)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">
          Bachelor of Science in Interactive Digital Media Visual Imaging
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
        <p>Creative Direction, Visual Design</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
    </div>
  );
}
