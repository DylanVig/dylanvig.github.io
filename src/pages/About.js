import PageShell from "../components/PageShell/PageShell.js";

export default function About() {
  return (
    <PageShell title="About">
      <header className="page-heading">
        <p className="kicker">About</p>
        <h1>A bit about me</h1>
      </header>
      <p className="about-copy">
        My name is Dylan Vig, and I am from New York, NY. Throughout my academic
        career, I have done a lot of exploring in terms of finding what type of
        career paths interest me, such as Mechanical Engineering,
        Business/Finance, and Marketing/Sales. While I've had many valuable
        experiences, my mind eventually settled on Computer Science, as it
        provides limitless opportunities and gives me the ability to turn my
        creative ideas into tangible products. Additionally, I want to build
        software that has a real impact on the world, trying to help make
        others' day just a little bit easier, one step at a time. Aside from
        coding, my hobbies include hanging out with friends, solving puzzles,
        and balloon twisting!
      </p>
    </PageShell>
  );
}
