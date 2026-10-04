import "./Footer2.css";
import { DATA } from "./FooterData.js";
import FooterBoxes from "./FooterBoxes.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>
        Contact me at <a href="tel:9178688283">917-868-8283</a> or{" "}
        <a href="mailto:drv36@cornell.edu">drv36@cornell.edu</a>
      </p>
      <div className="Footer-Data-Container">
        {DATA.map((socials) => (
          <FooterBoxes key={socials.title} {...socials} />
        ))}
      </div>
    </footer>
  );
}
