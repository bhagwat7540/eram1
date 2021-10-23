import React from "react";
import about from "../about.jpg";
import "./About.css";

function About() {
  return (
    <div>
      <div className="about__left">
        <h1>About Us</h1>
      </div>

      <div className="about__right">
        <div className="right1">
          <p>
            Eram Capital is a global special situations advisory and investment
            company focusing on bringing unique investment opportunities to
            global institutional and family-office co-investors. Eram sources,
            structures and manages investment opportunities exclusively on
            behalf of our equity partners and investors. Eram Capital founders &
            partners have over 100 years of combined experience and track-record
            for the benefit of our investment partners with specific expertise
            in equity & debt structuring, corporate advisory, asset management,
            and private equity. Eram has expertise in direct private investments
            and structured asset finance. Eram focuses on partnering together
            investors and principal capital with unique high-return
            opportunities in strategic sectors/assets/geographies. The firm
            offers facilitation of investor requirements through intelligent
            risk-focused investment structures, combining all elements of the
            capital structure with principal and third-party financing.
          </p>
        </div>
        <div className="right2">
          <img src={about} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default About;
