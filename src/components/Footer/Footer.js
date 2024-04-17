import './Footer2.css'
import { DATA } from './FooterData.js'
import FooterBoxes from './FooterBoxes.js'

export default function Footer() {
    return (
      <div className="Footer-Left">
        <center>
          <h4>Contact me at 917-868-8283 or drv36@cornell.edu</h4>
          <div className="Footer-Data-Container">
            {DATA.map((socials) => (
              <FooterBoxes key={socials.title} {...socials} />
            ))}
          </div>
        </center>
      </div>
    );
}