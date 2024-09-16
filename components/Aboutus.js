import React from 'react';
import Image from 'next/image';

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
              <Image src="/ro.jpg" alt="Rono" width={200} height={200} />
              <div className="info">
                <h3>Rono</h3>
                <p>Chairperson</p>
              </div>
            </div>
            <div className="card executive">
              <Image src="/steve.jpg" alt="Steve" width={200} height={200} />
              <div className="info">
                <h3>Steve</h3>
                <p>Organising Secretary</p>
              </div>
            </div>
            <div className="card executive">
              <Image src="/bildad.jpg" alt="Bildad" width={200} height={200} />
              <div className="info">
                <h3>Bildad</h3>
                <p>Brand Ambassador</p>
              </div>
            </div>
            <div className="card executive">
              <Image src="/bill.jpg" alt="Billy" width={200} height={200} />
              <div className="info">
                <h3>Billy</h3>
                <p>Project Manager</p>
              </div>
            </div>
            <div className="card executive">
              <Image src="/peter.jpg" alt="Peter" width={200} height={200} />
              <div className="info">
                <h3>Peter</h3>
                <p>Assistant Project Manager</p>
              </div>
            </div>
            <div className="card executive">
              <Image src="/edwin.jpg" alt="Edwin" width={200} height={200} />
              <div className="info">
                <h3>Edwin</h3>
                <p>Legal Advisor</p>
              </div>
            </div>
            <div className="card member">
              <Image src="/omingo.jpg"alt="Omingo" width={200} height={200} />
              <div className="info">
                <h3>Omingo</h3>
                <p>Communication</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
