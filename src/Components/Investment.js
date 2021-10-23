import React from "react";
import "./Investment.css";

function Investment() {
  return (
    <div>
      <div className="investment__left">
        <h1>Investment Management</h1>
      </div>

      <div className="investment__right">
        <p>
          Eram Capital identifies unique global special situations opportunities
          sourced through its proprietary channels. Eram focuses on high-return
          investment in public and private companies in key sectors that are
          being driven by globally-oriented demographic factors: energy
          consumption, population growth, urbanization, food consumption and
          globalization. Eram co-invests alongside its partners to achieve
          alignment of interests for the long-term. Investments are made
          directly in the company or project capital structure or via portfolio
          and managed account structures. Eram Capital manages investments
          through a variety of risk and performance criteria established with
          our co-investors with the target of achieving a successful
          monetization of the investments. Monetizations may include partnering
          with other co-investors, achieving a partial or complete trade sale or
          issuance of securities in the capital markets.
        </p>

        <br />

        <h2>Investment Activities</h2>

        <div className="investment__list">
          <ul>
            <li>Identification and structuring of investment opportunities</li>
            <li>
              Structuring of managed accounts and private investment vehicles
            </li>
            <li>Allocation and management of investor capital</li>
            <li>
              Strategic monetization and commercial development of portfolio
              companies
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Investment;
