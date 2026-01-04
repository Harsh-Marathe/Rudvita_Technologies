
const About = () => {
  return (
    <section className="about-container">
      <h1 className="about-title">About us</h1>

      <div className="about-grid">
        {/* Left Section */}
        <div className="about-left">
          <br/>
         
          <h3>Who We Are</h3>
          <p>
            Rudvita Technologies is a professional web development and IT
            services company dedicated to building modern, scalable, and
            secure websites for businesses of all sizes. We don’t just
            create websites—we build long-term digital solutions and
            maintain them to ensure consistent performance and growth.
          </p>
          <p>
            Our team focuses on clean design, strong functionality, and
            reliable maintenance so that our clients can focus on running
            their business while we take care of their online presence.
          </p>
<br/>
<br/>
          <h3>Our Mission</h3>
          <p>
            Our mission is to help businesses establish a strong digital
            identity through high-quality websites, reliable maintenance,
            and continuous technical support. We aim to deliver solutions
            that are simple, effective, and future-ready.
          </p>
        </div>

        {/* Right Section */}
        <div className="about-right">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
            alt="Team discussion"
          />
<br/>
<br/>

          <h3>Our Vision</h3>
          <p>
            To become a trusted technology partner for businesses by
            delivering innovative, secure, and scalable web solutions that
            drive long-term success.
          </p>
        </div>
      </div>

      <div className="why-choose">
        <h3>Why Choose Rudvita Technologies?</h3>
        <ul>
          <li>Professional and modern website designs</li>
          <li>Reliable website maintenance & support</li>
          <li>Client-focused and transparent process</li>
          <li>Scalable solutions for growing businesses</li>
          <li>Long-term technical partnership</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
