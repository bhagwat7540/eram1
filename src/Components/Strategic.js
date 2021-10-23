import React from "react";
import strategic from "../strategic.jpg";
import "./Strategic.css";

function Strategic() {
  return (
    <div>
      <div className="strategic__left">
        <h1>Startegic</h1>
      </div>

      <div className="strategic__right">
        <div className="strategic__par">
          <p>
            Eram Capital identifies investment and partnership opportunities
            based on a number of key strategic factors to determine the
            suitability for its investor partners as well as for the company or
            project sponsor seeking investment. Some of the primary factors are:
          </p>

          <div className="strategic__box">
            <ul>
              <li>
                Business Strategy:
                <ul>
                  <li>Clarity and longevity of strategy</li>
                  <li>Feasibility</li>
                  <li>Innovation</li>
                </ul>
              </li>
              <li>
                Complementary fit with our other investments:
                <ul>
                  <li>Opportunities for the domestic market</li>
                  <li>Global sector synergies</li>
                  <li>Willingness to develop partnerships</li>
                </ul>
              </li>
              <li>
                Growth Capital Expansion:
                <ul>
                  <li>Marginal impact of capital investment on growth</li>
                  <li>Life cycle of business plan</li>
                  <li>Magnitude of capital requirement</li>
                </ul>
              </li>
              <li>
                Strategic Sector or Geography:
                <ul>
                  <li>Growth cycle of sector or region</li>
                  <li>Demographic drivers</li>
                  <li>Sustainability</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="strategic__img">
          <img src={strategic} alt=""></img>
        </div>
      </div>

      <div className="strategic__bottom">
        <p>
          Eram Capital and its investor partners focus on companies and
          projects, either directly or via portfolio investments through
          sponsors, that exhibit strong bias toward sustainable growth and
          feasibility of success over the medium term.
        </p>
      </div>
    </div>
  );
}

export default Strategic;
