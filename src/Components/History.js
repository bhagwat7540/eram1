import React from "react";
import historyimg from "../history.jpg";
import "./History.css";

function History() {
  return (
    <div>
      <div className="history__left">
        <h1>History</h1>
      </div>

      <div className="history__right">
        <div className="history__right1">
          <p>
            Eram Capital was established in 2013. Its formal establishment was
            preceded by a history of successful collaboration and partnership
            between its founders in such sectors as oil & gas, financials,
            mining, and technology, and in developing and developed markets such
            as the UK, Brazil, South Africa, USA, Greece, India, Pakistan and
            Turkey. With extensive backgrounds in private equity, capital
            markets, investment banking advisory, debt and equity capital
            raising, Eram's partners and founders bring over 100 years of
            innovative experience to the Firm to the benefit of our investment
            partners.
          </p>
        </div>
        <div className="history__right2">
          <img src={historyimg} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default History;
