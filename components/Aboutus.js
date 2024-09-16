import React from 'react';

const AboutUs = () => {
  return (
    <div>
      <header>
        <div className="marquee">NETWORK OF ADVENTISTS IN TECH (NAIT)</div>
        <h1>About Us</h1>
      </header>

      <div className="container">
        <section>
          <h2>Meet the Team</h2>
          <p>
            Our team is a group of tech enthusiasts united by Adventist faith, working together to blend innovation with purpose.
          </p>
          <div className="team">
            <div className="card executive">
              <div className="badge"></div>
              <img src="/ro.jpg" alt="Rono" />
              <div className="info">
                <h3>Rono</h3>
                <p>Chairperson</p>
              </div>
            </div>
            <div className="card executive">
              <img src="/steve.jpg" alt="Steve" />
              <div className="info">
                <h3>Steve</h3>
                <p>Organising Secretary</p>
              </div>
            </div>
            <div className="card executive">
              <img src="/bildad.jpg" alt="Bildad" />
              <div className="info">
                <h3>Bildad</h3>
                <p>Brand Ambassador</p>
              </div>
            </div>
            <div className="card executive">
              <img src="/bill.jpg" alt="Billy" />
              <div className="info">
                <h3>Billy</h3>
                <p>Project Manager</p>
              </div>
            </div>
            <div className="card executive">
              <img src="" alt="Peter" />
              <div className="info">
                <h3>Peter</h3>
                <p>Assistant Project Manager</p>
              </div>
            </div>
            <div className="card executive">
              <img src="" alt="Edwin" />
              <div className="info">
                <h3>Edwin</h3>
                <p>Legal Advisor</p>
              </div>
            </div>
            <div className="card member">
              <img src="/omingo.jpg" alt="Omingo" />
              <div className="info">
                <h3>Omingo</h3>
                <p>Communication</p>
              </div>
            </div>
            {/* team members */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
