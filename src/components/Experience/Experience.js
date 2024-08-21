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
import tutoring from '../../assets/icons/tutoring.jpg'

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

  function Tutoring() {
    return <img src={tutoring} alt='hi' style={{ width: "35px", height: "35px", filter: "invert(100%)" }}/>;
  }

  return (
    <div className="timeline">
    <VerticalTimeline>
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(155, 155, 155)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(0,0,0)" }}
        date="Jun. 2024 - Aug. 2024"
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
          Worked on the Servicing Engineering Team. Worked mostly on internal tooling, which involved developing solutions to allow agents access OTP Authentication Email Delivery Status data to assist customers, prevent redundant Q&A article generation in the agent assistant tool when speaking to customers, and developing a new intent in the customer service chatbot.
        </p>
      </VerticalTimelineElement>
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(155, 155, 155)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(0,0,0)" }}
        date="May 2024 - Aug. 2024"
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
        Enhanced the current data discovery and masking system by integrating a more secure categorization and scoring model to enhance data protection by utilizing different Python libraries to increase the security and versatility.
        </p>
      </VerticalTimelineElement>
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(155, 155, 155)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(0,0,0)" }}
        date="Oct. 2023 - Present"
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
          Part of a Team that Builds an Autonomous Plane. On Imaging Systems, We Develop Software to Capture and Process Imaging Data.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(155, 155, 155)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(0,0,0)" }}
        date="Aug. 2023 - Present"
        iconStyle={{ background: "rgb(155, 155, 155)", color: "#fff", display: 'flex',
        alignItems: 'center',
        justifyContent: 'center' }}
        icon={<Education />}
      >
        <h3 className="vertical-timeline-element-title" style={{ fontSize: '35px'}}>Cornell University</h3>
        <h4 className="vertical-timeline-element-subtitle" style={{ fontSize: '25px'}}>Engineering Student</h4>
        <p style={{ fontSize: '18px'}}>
          Pursuing a B.E. in Computer Science.
          <br />
          Minor in Operations Research and Information Engineering.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(155, 155, 155)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(0,0,0)" }}
        date="May 2023 - Aug. 2023"
        iconStyle={{ background: "rgb(155, 155, 155)", color: "#fff", display: 'flex',
        alignItems: 'center',
        justifyContent: 'center' }}
        icon={<Research />}
      >
        <h3 className="vertical-timeline-element-title" style={{ fontSize: '35px'}}>NYU Jonathan M. Tisch Center of Hospitality</h3>
        <h4 className="vertical-timeline-element-subtitle" style={{ fontSize: '25px'}}>
        Tourism Business Research Assistant</h4>
        <p style={{ fontSize: '18px'}}>
        Conducted a research project discussing the impacts of COVID-19 on overtourism in popular tourist destinations, where I investigated the social, economic, and environmental impacts of overtourism and the changes in these conditions throughout the pandemic.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(155, 155, 155)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(0,0,0)" }}
        date="Sep. 2019 - May 2023"
        iconStyle={{ background: "rgb(155, 155, 155)", color: "#fff", display: 'flex',
        alignItems: 'center',
        justifyContent: 'center' }}
        icon={<Education />}
      >
        <h3 className="vertical-timeline-element-title" style={{ fontSize: '35px'}}>Columbia Grammar and Preparatory School</h3>
        <h4 className="vertical-timeline-element-subtitle" style={{ fontSize: '25px'}}>Student</h4>
        <p style={{ fontSize: '18px'}}>
          Math Club President, Multi-Ethnic Cultural Awareness Club President, and Student Government Treasurer.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(155, 155, 155)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(0,0,0)" }}
        date="Jun. 2022 - Aug. 2023"
        iconStyle={{ background: "rgb(155, 155, 155)", color: "#fff", display: 'flex',
        alignItems: 'center',
        justifyContent: 'center' }}
        icon={<Energy />}
      >
        <h3 className="vertical-timeline-element-title" style={{ fontSize: '35px'}}>Orange Energizing Solutions</h3>
        <h4 className="vertical-timeline-element-subtitle" style={{ fontSize: '25px'}}>
        Client Operations Analyst Intern</h4>
        <p style={{ fontSize: '18px'}}>
          Organized Company Database, Administered Client Documentation, and Researched Sustainability Programs and Potential Partnerships. Jun 2022 - Aug 2022 and February 2023 - Aug 2023.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(155, 155, 155)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(0,0,0)" }}
        date="Jun. 2022 - Aug. 2023"
        iconStyle={{ background: "rgb(155, 155, 155)", color: "#fff", display: 'flex',
        alignItems: 'center',
        justifyContent: 'center' }}
        icon={<Engineering />}
      >
        <h3 className="vertical-timeline-element-title" style={{ fontSize: '35px'}}>Actasys</h3>
        <h4 className="vertical-timeline-element-subtitle" style={{ fontSize: '25px'}}>Mechanical Engineering Intern</h4>
        <p style={{ fontSize: '18px'}}>
          Worked on the Actuator Development Team. Manufactured the Patented Actajet Technology, Tested Jet Efficiency and Identified Improvements to the Product and Manufacturing Process.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(155, 155, 155)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(0,0,0)" }}
        date="Jun. 2021 - May 2024"
        iconStyle={{ background: "rgb(155, 155, 155)", color: "#fff", display: 'flex',
        alignItems: 'center',
        justifyContent: 'center' }}
        icon={<Tutoring />}
      >
        <h3 className="vertical-timeline-element-title" style={{ fontSize: '35px'}}>TutorLinkNYC</h3>
        <h4 className="vertical-timeline-element-subtitle" style={{ fontSize: '25px'}}>Co-Founder + Co-President</h4>
        <p style={{ fontSize: '18px'}}>
          Provides Free and Accessible 1-on-1 Tutoring Services to Disadvantaged Students. Served 250+ students and recruited 150+ volunteers.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
    </div>
  );
}
