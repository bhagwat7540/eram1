import React from "react";
import evaluation from "../evaluation.jpg";
import "./Evaluation.css";

function Evaluation() {
  return (
    <div>
      <div className="evaluation__left">
        <h1>Evaluation Criteria</h1>
      </div>

      <div className="evaluation__right">
        <div className="evaluation__par">
          <p>
            Eram Capital focuses on special situations opportunities defined as
            those opportunities offering unique investment return potential with
            atypical risk characteristics. The scope of our screening process is
            not limited to a narrow definition and may include restructuring
            opportunities, growth capital situations, complex structure
            investments, or early stage development projects.
          </p>
          <br />
          <p>
            Eram Capital works closely with potential companies and identifies
            investment opportunities that are synergistic to both the companies
            and our investor partners. We base this determination on a number of
            fundamental bottoms-up factors which complement our assessment of
            the opportunity alongside the strategic factors. Our key evaluation
            criteria of the company, project, or sponsored portfolio investment
            are:
          </p>
        </div>

        <div className="evaluation__img">
          <img src={evaluation} alt=""></img>
        </div>
      </div>
      <div className="evaluation__bottom">
        <div className="evaluation__list">
          <ul>
            <li>Management performance, integrity and governance</li>
            <li>Past and projected financial performance</li>
            <li>Supporting macro economic growth factors</li>
            <li>
              Risk / return profile and transparency of the investment structure
            </li>
            <li>
              Liquidity of the investment with emphasis on exit strategies
            </li>
          </ul>
        </div>

        <br />
        <p>
          Eram Capital and its investor partners focus on companies and
          projects, either directly or via portfolio investments through
          sponsors, which can deliver unique return performance with acceptable
          and manageable levels of risk.
        </p>
      </div>
    </div>
  );
}

export default Evaluation;
