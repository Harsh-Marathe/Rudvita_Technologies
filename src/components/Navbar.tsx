
import React from "react";

type Props = {
  currentPage: string;
  onNavClick: (page: string) => void;
};

const Navbar: React.FC<Props> = ({ currentPage, onNavClick }) => {
  const navItems = ["home", "services", "about", "career", "contact"];

  return (
    <nav className="navbar">
      {/* BRAND */}
      <div className="brand" onClick={() => onNavClick("home")}>
        
        <span className="logo glowwhite">RUDVITA TECHNOLOGY</span>
      </div>

      {/* NAV LINKS */}
      <ul className="nav-links">
        {navItems.map((item) => (
          <li
            key={item}
            className={currentPage === item ? "active" : ""}
            onClick={() => onNavClick(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

