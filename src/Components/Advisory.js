import React from "react";
import "./Advisory.css";

function Advisory() {
  return (
    <div>
      <div className="advisory__left">
        <h1>Advisory</h1>
      </div>

      <div className="advisory__right">
        <p>
          Eram Capital offers clients its expertise in arranging financing for
          unique global special situations investment opportunities with global
          institutional and family-office investors. We focus on core sectors
          and specific opportunities where the growth prospects are being driven
          by long-term, globally-oriented and growth-oriented demographic
          factors. We identify investment opportunities that suit our investors
          risk appetite and preference along with our own stringent quality
          control criteria. Eram co-invests alongside its investor, corporate,
          and portfolio management partners and is actively involved in the
          management and governance of the investment. Eram has a local presence
          in the geographies in which we focus and we leverage this expertise to
          provide appropriate governance structures to ensure the active level
          of management of the investment.
        </p>

        <br />

        <h2>Investment Activities</h2>

        <div className="advisory__list">
          <ul>
            <li>Identification and structuring of investment opportunities</li>
            <li>Corporate finance structuring and capital raising</li>
            <li>Equity and debt structuring solutions</li>
            <li>
              Evaluation of business development scenarios and identification of
              strategic partners
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Advisory;
