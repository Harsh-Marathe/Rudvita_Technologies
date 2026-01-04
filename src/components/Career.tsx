/*import React from "react";

const career: React.FC = () => {
  return (
    <section className="page-section">
      <h2>About Us</h2>
      <p>We provide professional web development and digital solutions.</p>
    </section>
  );
};

export default career;*/
import React from "react";

const Career: React.FC = () => {
  return (
    <section className="career-page">

      {/* HEADING */}
      <h1 className="career-heading glow-black">
        Careers at Rudvita Technologies
      </h1>

      {/* CONTENT + IMAGE */}
      <div className="career-top">
        <div className="career-content">
          <p>
            At Rudvita Technologies, we believe people are the foundation of
            innovation. We are always looking for passionate, curious, and
            motivated individuals who want to grow in technology.
          </p>
          <p>
            Whether you’re a fresher or experienced professional, we provide
            learning, creativity, and growth opportunities.
          </p>
        </div>

        <img
          className="career-image"
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
          alt="Team"
        />
      </div>

      {/* OPEN POSITIONS + WHY */}
      <div className="career-bottom">

        {/* LEFT - OPEN POSITIONS */}
        <div className="position-section">
          <h3>Open Positions</h3>

          <div className="position green">1. BPO</div>
          <div className="position red">2. CUSTOMER SUPPORT</div>
          <div className="position blue">3. TECHNICAL SUPPORT</div>
          <div className="position yellow">4. DATA ENTRY</div>
        </div>

        {/* RIGHT - WHY WORK WITH US */}
        <div className="why-section">
          <h3>Why Work With Us?</h3>
          <ul>
            <li>Friendly and collaborative culture</li>
            <li>Work on real-world projects</li>
            <li>Continuous learning & growth</li>
            <li>Mentorship and career support</li>
            <li>Flexible environment</li>
          </ul>
        </div>
      </div>

      {/* APPLY - BOTTOM LEFT */}
      <div className="apply-left">
        <h3>How to Apply</h3>
        <p>
          Send your resume to <br />
          <a href="mailto:hr@rudvitatechnologies.com">
            hr@rudvitatechnologies.com
          </a>
        </p>
      </div>

    </section>
  );
};

export default Career;
