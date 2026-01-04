import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Career from "./components/Career";
import Contact from "./components/Contact";

const App: React.FC = () => {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "home": return <Hero />;
      case "about": return <About />;
      case "services": return <Services />;
      case "career": return <Career />;
      case "contact": return <Contact />;
      default: return <Hero />;
    }
  };

  return (
    <div>
      <Navbar currentPage={page} onNavClick={setPage} />
      {renderPage()}
    </div>
  );
};

export default App;
