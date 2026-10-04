import PageShell from "../components/PageShell/PageShell.js";
import ProjectSlider from "../components/ProjectSlider/ProjectSlider.js";
import Skills from "../components/Skills/Skills.js";

export default function Projects() {
  return (
    <PageShell title="Projects" wide>
      <header className="page-heading">
        <p className="kicker">Projects</p>
        <h1>Things I've built</h1>
        <p className="lede">Click a card for the write-up. Hover a still to play the recording.</p>
      </header>
      <ProjectSlider />
      <section className="skills-block">
        <h2>Skills</h2>
        <Skills />
      </section>
    </PageShell>
  );
}
