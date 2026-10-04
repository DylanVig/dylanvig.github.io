import "./NavBar.css";
import { useNavigate, useLocation } from "react-router-dom";
import NavButton from "./NavButton.js";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  function isSelected(href) {
    const path = location.pathname.toLowerCase();
    if (href === "/") return path === "/" || path === "/home";
    if (href === "/experience") {
      return path === "/experience" || path === "/experiencepage";
    }
    return path === href;
  }

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <button className="wordmark" onClick={() => navigate("/")}>
          Dylan Vig
        </button>
        <nav aria-label="Primary">
          <ul>
            {LINKS.map((link) => (
              <NavButton
                key={link.href}
                isSelected={isSelected(link.href)}
                onClick={() => navigate(link.href)}
              >
                {link.label}
              </NavButton>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
