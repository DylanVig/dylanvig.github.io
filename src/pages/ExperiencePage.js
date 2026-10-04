import PageShell from "../components/PageShell/PageShell.js";
import Experience from "../components/Experience/Experience.js";

export default function ExperiencePage() {
  return (
    <PageShell title="Experience">
      <header className="page-heading">
        <p className="kicker">Experience</p>
        <h1>Education and work</h1>
      </header>
      <Experience />
    </PageShell>
  );
}
