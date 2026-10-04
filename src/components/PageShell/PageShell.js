import { useEffect } from "react";
import NavBar from "../NavBar/NavBar.js";
import Footer from "../Footer/Footer.js";
import "../../pages/Pages.css";

export default function PageShell({ title, wide, children }) {
  useEffect(() => {
    document.title = title ? `${title} · Dylan Vig` : "Dylan Vig";
  }, [title]);

  return (
    <div className="page">
      <NavBar />
      <main className={wide ? "page-main page-main-wide" : "page-main"}>{children}</main>
      <Footer />
    </div>
  );
}
