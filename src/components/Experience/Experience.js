import "./Experience.css";

const COURSEWORK = [
  "Foundations of Robotics",
  "Operating Systems",
  "Computer Systems Programming",
  "Analysis of Algorithms",
  "Machine Learning",
  "Computer Networks",
  "Optimization",
  "Linear Algebra",
  "Statistics",
];

const ROLES = [
  {
    org: "Google",
    place: "Sunnyvale, CA",
    dates: "Aug 2026 – Nov 2026",
    title: "Software Engineer Intern",
    stack: ["JavaScript", "Java"],
    points: [
      "Developing new Privacy and Security tabs for Gmail Settings, reorganizing sensitive account controls and refactoring legacy JavaScript delegate architecture to support a more modular and maintainable frontend.",
      "Building and instrumenting JavaScript telemetry and usage metrics for Gmail Settings, measuring ~8M unique weekly users and tab-level engagement to support data-driven product decisions.",
    ],
  },
  {
    org: "Millennium Management",
    place: "New York, NY",
    dates: "Jun 2026 – Aug 2026",
    title: "Software Engineer Intern",
    stack: ["C#", "Angular", "SQL"],
    points: [
      "Implemented an internal automation tool that extracts daily financial data updates from unstructured communications and generates structured Excel reports, eliminating manual data collection and improving reporting efficiency.",
      "Built a scalable data comparison platform that versions daily price and market value snapshots for 2M+ securities, enabling rapid identification and investigation of data changes across reporting cycles.",
      "Developed an end-to-end deployment automation tool that orchestrates software release workflow from a Jira ticket by identifying relevant branches, creating pull requests, triggering CI/CD pipelines, publishing releases, and notifying QA with deployment artifacts, supporting 30+ engineers and reducing manual steps by ~90%.",
      "Developed an environment reservation platform that manages deployment queues across testing environments, providing real-time availability, automated scheduling, and notifications to reduce coordination overhead.",
    ],
  },
  {
    org: "Meta",
    place: "Menlo Park, CA",
    dates: "May 2025 – Aug 2025",
    title: "Software Engineer Intern",
    stack: ["Hack/PHP", "React.js", "SQL", "GraphQL"],
    points: [
      "Engineered a full-stack testing platform for a large-scale distributed content policy enforcement decisioning pipeline processing billions of entities daily, enabling 50+ engineers to simulate production workflows and accelerate debugging.",
      "Built an automated backfill system to reprocess millions of entities following pipeline corrections, enabling rapid remediation of large-scale data inconsistencies across production systems.",
      "Resolved 30+ failing test cases caused by upstream code changes, accounting for ~25% of outstanding issues and improving overall code reliability and on-call engineer experience across the Central Integrity & Support platform.",
    ],
  },
  {
    org: "Cornell University Unmanned Air Systems",
    place: "Ithaca, NY",
    dates: "Oct 2023 – May 2025",
    title: "Imaging Systems Software Engineer",
    stack: ["React.js", "Spring Boot", "PostgreSQL"],
    points: [
      "Developed a real-time mission control dashboard for an autonomous aircraft platform, enabling live visualization of telemetry, camera feeds, target detections, waypoint planning, and mission replay.",
      "Built mission software to ingest, manage, and visualize 1,000+ records of camera imagery, telemetry, and target data, enabling operators to analyze flights in real time and post-flight and generate mission documentation.",
      "Designed and implemented a real-time sensor fusion dashboard that combines GPS, IMU, battery, and computer vision data into a unified operational view, enabling live monitoring of autonomous aircraft health, navigation, and target detection.",
      "Redesigned and implemented CUAir's target detection pipeline to support new competition objectives, collaborating with the ML team to integrate a 99% accurate computer vision model for automated mission target classification.",
    ],
  },
  {
    org: "OnePay",
    place: "New York, NY",
    dates: "Jun 2024 – Aug 2024",
    title: "Software Engineer Intern",
    stack: ["TypeScript", "AWS", "Terraform", "Retool", "MySQL"],
    points: [
      "Developed an internal support dashboard that surfaced OTP email delivery status through a centralized interface, enabling 25+ customer service agents to rapidly diagnose and resolve customer verification issues.",
      "Expanded the customer support chatbot by implementing a new Amazon Lex intent for funds availability inquiries, automating responses for ~2,000 customer requests per week and improving self-service capabilities.",
      "Enhanced an AI-powered knowledge management system by integrating GPT-4–based semantic similarity detection to identify duplicate support content, improving knowledge base quality and reducing redundant article creation.",
    ],
  },
  {
    org: "Mage Data",
    place: "Remote",
    dates: "May 2024 – Aug 2024",
    title: "Software Engineer Intern",
    stack: ["Python", "Pandas", "NumPy", "Tensorflow"],
    points: [
      "Developed an end-user testing interface for a sensitive data classification platform, enabling customers to evaluate machine learning predictions on custom text inputs through real-time entity extraction and classification visualization.",
      "Built a hybrid preprocessing pipeline combining regex-based feature extraction, schema analysis, and data profiling to support automated identification of 40+ sensitive data categories, improving classification accuracy by 15%.",
    ],
  },
];

export default function Experience() {
  return (
    <div className="resume">
      <section className="education" aria-labelledby="education-heading">
        <p className="section-label" id="education-heading">
          Education
        </p>
        <div className="education-card">
          <div>
            <h2>Cornell University</h2>
            <p className="education-school">College of Engineering · Ithaca, NY</p>
            <p className="education-degree">Bachelor of Science in Computer Science</p>
            <p className="education-minor">
              Minor in Operations Research & Management Science
            </p>
          </div>
          <p className="education-date">Expected May 2027</p>
          <div className="coursework">
            <h3>Relevant coursework</h3>
            <ul>
              {COURSEWORK.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="experience-heading">
        <p className="section-label" id="experience-heading">
          Technical Experience
        </p>
        <ol className="roles">
          {ROLES.map((role, index) => (
            <li className="role" key={role.org}>
              <div className="role-meta">
                <span className="role-index">{String(index + 1).padStart(2, "0")}</span>
                <p className="role-dates">{role.dates}</p>
                <p className="role-place">{role.place}</p>
              </div>
              <div className="role-body">
                <h2>{role.org}</h2>
                <p className="role-title">{role.title}</p>
                <ul className="stack" aria-label="Tools">
                  {role.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <ul className="role-points">
                  {role.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
