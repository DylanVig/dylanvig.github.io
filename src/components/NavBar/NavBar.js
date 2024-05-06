import './NavBar.css'
import { useState } from 'react'
import NavButton from './NavButton.js'
import { useNavigate } from 'react-router-dom'

export default function NavBar() {

    const [ selectedPage, setPage ] = useState("Home");
    const navigate = useNavigate();

    function handleSelect(page) {
        setPage(page);
        navigate("/" + page.toLowerCase())
    }

    return (
      <div className="NavBar">
        <ul>
          <NavButton
            isSelected={selectedPage === "Home"}
            onClick={() => handleSelect("Home")}
          >
            Home
          </NavButton>
          <NavButton
            isSelected={selectedPage === "About"}
            onClick={() => handleSelect("About")}
          >
            About
          </NavButton>
          <NavButton
            isSelected={selectedPage === "ExperiencePage"}
            onClick={() => handleSelect("ExperiencePage")}
          >
            Experience
          </NavButton>
          <NavButton
            isSelected={selectedPage === "Projects"}
            onClick={() => handleSelect("Projects")}
          >
            Projects
          </NavButton>
          <NavButton
            isSelected={selectedPage === "Contact"}
            onClick={() => handleSelect("Contact")}
          >
            Contact
          </NavButton>
        </ul>
      </div>
    );
}