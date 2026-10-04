import PageShell from "../components/PageShell/PageShell.js";
import ContactForm from "../components/ContactForm/ContactForm.js";

export default function Contact() {
  return (
    <PageShell title="Contact">
      <header className="page-heading">
        <p className="kicker">Contact</p>
        <h1>Say hello</h1>
        <p className="lede">
          I'm always open to discussing new opportunities, collaborations, and
          ideas. Whether it's work, a personal project, or just to share
          thoughts and hobbies, I'd love to hear from you! Feel free to use the
          form below or reach out directly via email or phone!
        </p>
      </header>
      <ContactForm />
    </PageShell>
  );
}
