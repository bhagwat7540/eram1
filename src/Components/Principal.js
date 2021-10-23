import React from "react";
import "./Principal.css";

function Principal() {
  return (
    <div>
      <div className="principal__left">
        <h1>Principal Investments</h1>
      </div>

      <div className="principal__right">
        <p>
          Eram Capital deploys its own partner capital toward unique special
          situations investment opportunities to co-invest alongside our other
          investment partners or to serve as an anchor investor. Eram
          specializes in complex, illiquid, high return and long-dated
          investment structures and utilizes its expertise to efficiently invest
          in such opportunities. Eram can deploy proprietary capital toward
          working capital and investment capital requirements at the company,
          project or asset level.
        </p>

        <br />

        <h2>Investment Activities</h2>

        <div className="principal__list">
          <ul>
            <li>
              Investing proprietary capital alongside investor clients in deals
              originated by Eram
            </li>
            <li>
              Facilitating transactions in the form of working capital for deal
              due diligence & structuring or investment capital in the
              underlying asset or company
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Principal;
