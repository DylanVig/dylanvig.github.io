import "./Intro.css";

const ResumeView = ({ pdf }) => {
  return (
    <a className="btn btn-primary" href={pdf} target="_blank" rel="noopener noreferrer">
      Resume
    </a>
  );
};

export default ResumeView;
